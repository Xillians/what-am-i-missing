<template>
  <div class="container">
    <textarea v-model="decklist" placeholder="Decklist"></textarea>
    <textarea v-model="collection" placeholder="Collection"></textarea>
  </div>
  <button @click="analyze">Analyze</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CardInput } from "../utils/card-input-formatting";
import { CardInputType } from '../models/card-input';

@Options({
  name: "CardListInputs",
  emits: ["missing_cards"],
  data() {
    return {
      decklist: "",
      collection: "",
      missing_cards: new Map<string, number>(),
    };
  },
  methods: {
    analyze() {
      this.missing_cards = new Map<string, number>();
      const decklist = this.split_cards(this.decklist);
      const collection = this.split_cards(this.collection);

      decklist.forEach((quantity: number, name: string) => {
        this.set_missing_cards(name, quantity, collection);
      });
      this.$emit("missing_cards", this.missing_cards);
    },
    split_cards(cardlist: string) {
      const cards = cardlist.split("\n");
      const card_inputs = new Map<string, number>();
      cards.forEach((card) => {
        const card_input = new CardInput(card);
        card_inputs.set(card_input.name, card_input.quantity);
      });
      return card_inputs;
    },
    set_missing_cards(
      name: string,
      quantity: number,
      collection: Map<string, number>
    ) {
      if (collection.has(name)) {
        const collection_quantity = collection.get(name);
        if (collection_quantity &&  collection_quantity < quantity) {
          const card: CardInputType = {
            name: name,
            quantity: quantity - collection_quantity,
          };
          this.missing_cards.set(card.name, card.quantity);
        }
      } else {
        this.missing_cards.set(name, quantity);
      }
    },
  },
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

button {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;
}
</style>
