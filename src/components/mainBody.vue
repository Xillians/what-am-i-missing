<template>
  <div>
    <div id="inputs" class="flexbos">
      <inputs :name="`decklist`" @ondecklistUpdate="decklist = $event" />
      <inputs :name="`collection`" @oncollectionUpdate="collection = $event" />
    </div>
    <compareData
      :decklist="decklist"
      :collection="collection"
      @onDataCompared="outputResult = $event"
    />
    <outputData :outputText="outputResult" :scryfallInfo="scryfallInfo" />
    <scryfall-data :outputText="outputResult" @onCardInfoUpdated="something" />
  </div>
</template>

<script>
import inputs from "./basic components/inputs.vue";
import compareData from "./compareData.vue";
import outputData from "./output.vue";
import scryfallData from "./scryfallData.vue";

export default {
  name: "mainBody",
  data() {
    return {
      decklist: "",
      collection: "",
      outputResult: "",
      scryfallInfo: [],
    };
  },
  components: {
    inputs,
    compareData,
    outputData,
    scryfallData,
  },
  methods: {
    something(eventData) {
      this.scryfallInfo = eventData;
    },
  },
  props: [],
};
</script>

<style scoped>
</style>