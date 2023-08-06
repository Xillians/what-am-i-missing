<template>
  <Header title="Magic Deck Gap Analyzer" />
  <card-list-inputs />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardListInputs from "./components/card-list-inputs.vue";
import Header from "./components/header.vue";

@Options({
  components: {
    CardListInputs,
    Header,
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
</style>
