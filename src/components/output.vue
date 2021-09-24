<template>
  <div id="output" class="output">
    <!-- decklist: {{decklist}} <br>
      collection: {{collection}} <br> -->
    <li 
        class="outputList"
        v-for="card in outputText" 
        :key="card"
    >{{card}}</li>
  </div>
</template>

<script>
export default {
  name: "outputData",
  props: ["decklist", "collection", "outputText"],
};
</script>

<style scoped>
.output {
  position: relative;
  width: 90%;
  height: 40%;
  margin-top: 30px;
}
.outputList {
    position: relative;
    display: block;
}
</style>