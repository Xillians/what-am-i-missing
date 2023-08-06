<template>
  <div class="container">
    <textarea placeholder="Decklist"></textarea>
    <textarea placeholder="Collection"></textarea>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "CardListInputs",
})
export default class CardListInputs extends Vue {}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

textarea {
    width: 50%;
    min-height: 10rem;
    height: auto;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
}
</style>
