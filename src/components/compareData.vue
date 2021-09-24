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
      const dummyData = {
        cards: ["Black lotus", "Dark Magician", "Exodia, the Forbidden One"],
      };
      this.$emit("onDataCompared", dummyData);
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