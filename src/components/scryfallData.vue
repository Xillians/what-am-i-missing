<template>
  <div></div>
</template>

<script>
import { Scryfall } from "../jsController/API/scryfall";

export default {
  name: "scryfallData",
  props: ["outputText"],
  data() {
    return {
      scryfall: new Scryfall(),
      cardData: [],
    };
  },
  methods: {
    async fetchScryfallData() {
      let cards = this.splitAmountAndNameList(this.outputText);
      let formattedList = [];

      while (cards.length > 75) {
        let block = cards.splice(0, 75);
        formattedList = await this.getFullCardListInfo(block, formattedList);
      }
      this.cardData = await this.getFullCardListInfo(cards, formattedList);
    },
    async convertDataToInfo(jsonData) {
      const sets = [];
      const allSetsResponse = await this.scryfall.getAllSets(
        jsonData.prints_search_uri
      );
      allSetsResponse.data.data.forEach((set) => {
        sets.push({
          name: set.set_name,
          code: set.set,
        });
      });
      return {
        name: jsonData.name,
        sets,
        image: jsonData.image_uris.small,
        rarity: jsonData.rarity,
        prices: jsonData.prices,
        qty: 0,
      };
    },
    async getFullCardListInfo(block, cardList) {
      let names = [];
      block.forEach((object) => {
        const requestObject = {
          name: object.card.name,
        };
        names.push(requestObject);
      });
      let response = await this.scryfall.POST_Collection(names);
      let blockCardList = response.data.data;

      for (const card of blockCardList) {
        let cardInfo = await this.convertDataToInfo(card);
        cardInfo = this.setQuantity(cardInfo, block);
        cardList.push(cardInfo);
      }
      return cardList;
    },
    setQuantity(formattedCardInfo, block) {
      const search = (element) => element.card.name.toLowerCase() === formattedCardInfo.name.toLowerCase();
      const cardInBlock = block.find(search);
      formattedCardInfo.qty = cardInBlock.card.quantity;
      return formattedCardInfo;
    },
    splitAmountAndNameList(cardList = []) {
      const formattedList = [];
      cardList.forEach((card) => {
        const formattedData = this.splitAmountAndName(card);
        formattedList.push({ card: formattedData });
      });
      return formattedList;
    },
    splitAmountAndName(text) {
      const split = text.split(" ");
      const quantity = Number(split[0]);
      split.shift();
      const name = split.join(" ");
      return { name, quantity };
    },
  },
  watch: {
    outputText: async function () {
      await this.fetchScryfallData();
      this.$emit("onCardInfoUpdated", this.cardData);
    },
  },
};
</script>

<style scoped>
</style>