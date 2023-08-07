<template>
  <Header title="Magic Deck Gap Analyzer" />
  <card-list-inputs @missing_cards="missing_cards = $event"/>
  <list-output v-if="missing_cards.size > 0" :missing_cards="missing_cards" />
  <scryfall-data v-if="missing_cards.size > 0" :missing_cards="missing_cards" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardListInputs from "./components/card-list-inputs.vue";
import Header from "./components/header.vue";
import listOutput from "./components/list-output.vue";
import ScryfallData from "./components/scryfall-data.vue";

@Options({
  components: {
    CardListInputs,
    Header,
    listOutput,
    ScryfallData
  },
  data() {
    return {
      missing_cards: new Map<string, number>(),
    };
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 1rem;
}
button {
  background-color: #b3d4fc;
  color: #ffffff;
}
</style>
