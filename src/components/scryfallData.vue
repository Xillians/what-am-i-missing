<template>
  <div>{{cardData}}</div>
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
    async getMultipleCards() {
      let cards = [];
      let fullIndex = [];

      // Create list of cards with name specified
      this.outputText.forEach((card) => {
        const cardName = this.removeAmount(card);
        cards.push({ name: cardName });
      });

      //split cardlist into segments of 75 for scryfall API spec
      while (cards.length > 75) {
        let tempArray = cards.splice(0, 75);
        fullIndex.push(tempArray);
      }
      fullIndex.push(cards);
      fullIndex.forEach(async (cardList) => {
        let response = await this.scryfall.collectMultipleCards(cardList);
        response.data.data.forEach(async (card) => {
          const cardInfo = await this.convertDataToInfo(card);
          this.cardData.push(cardInfo);
        });
      });
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
    removeAmount(text) {
      const split = text.split(" ");
      split.shift();
      return split.join(" ");
    },
  },
  watch: {
    outputText: async function () {
      console.log("woop");
      await this.getMultipleCards();
      this.$emit("onCardInfoUpdated", this.cardData);
    },
  },
};
</script>

<style scoped>
</style>