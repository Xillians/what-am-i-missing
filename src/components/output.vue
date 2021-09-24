<template>
  <div id="output" class="output">
      decklist: {{decklist}} <br>
      collection: {{collection}} <br>
      output: {{outputText}}
  </div>
</template>

<script>
export default {
    name: "outputData",
    props: [
        "decklist",
        "collection",
        "outputText"
    ]
};
</script>

<style scoped>
.output {
    position: relative;
    width: 90%;
    height: 40%;
    margin-top: 30px
}
</style>