<template>
  <div class="flexbox">
    <base-button
      :id="`compareData`"
      :text="`give me the list`"
      @click="compareFiles"
    />
  </div>
</template>

<script>
import baseButton from "./basic components/btn.vue";
export default {
  name: "compareData",
  props: ["decklist", "collection"],
  components: {
    baseButton,
  },
  methods: {
    compareFiles() {
      let missingCards = [];

      this.decklist.forEach((value, key) => {
        const cardName = key;
        const requiredQuantity = value.qty;

        if (this.collection.has(cardName)) {
          if (this.collection.get(cardName).qty < requiredQuantity)
            missingCards.push(
              `${
                requiredQuantity - this.collection.get(cardName).qty
              } ${cardName}`
            );
        } else {
          missingCards.push(`${requiredQuantity} ${cardName}`);
        }
      });

      this.$emit("onDataCompared", missingCards);
    },
  },
};
</script>

<style scoped>
</style>