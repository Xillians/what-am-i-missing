<template>
  <div>
    <button 
    id="compareData" 
    class="mainButton"
    @click="compareFiles"
    >give me the list</button>
  </div>
</template>

<script>
export default {
  name: "compareData",
  props: ["decklist", "collection"],
  methods: {
    compareFiles() {
      let missingCards = [];

      this.decklist.forEach( (value, key) => {
        const cardName = key;
        const requiredQuantity = value.qty;
        
        if(this.collection.has(cardName)) {
          if(this.collection.get(cardName).qty < requiredQuantity)
            missingCards.push(`${requiredQuantity - this.collection.get(cardName).qty} ${cardName}`);
        }
        else {
          missingCards.push(`${requiredQuantity} ${cardName}`);
        }
          
      });

      this.$emit("onDataCompared", missingCards);
    },
  },
};
</script>

<style scoped>
.mainButton {
  width: 105px;
  height: 30px;
  background-color: #b9c7ee;
  border-radius: 50px;
}
</style>