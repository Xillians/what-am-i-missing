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
      let cards = this.removeAmountFromList(this.outputText);
      let formattedList  = [];

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
      };
    },
    async getFullCardListInfo(block, cardList) {
      let response = await this.scryfall.POST_Collection(block);
      let blockCardList = response.data.data;

      for (const card of blockCardList) {
        const cardInfo = await this.convertDataToInfo(card);
        cardList.push(cardInfo);
      }
      return cardList;
    },
    removeAmountFromList(cardList = []) {
      const formattedList = [];
      cardList.forEach((card) => {
        const cardName = this.removeAmount(card);
        formattedList.push({ name: cardName });
      });
      return formattedList;
    },
    removeAmount(text) {
      const split = text.split(" ");
      split.shift();
      return split.join(" ");
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