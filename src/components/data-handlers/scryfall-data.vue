<template>
  <div class="container">
    <div class="card-data" v-for="card in cards" :key="card.name">
      <card-data :card="card" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CardData } from "@/models/card-data";
import cardData from "./card-data.vue";
import { Scryfall } from "@/utils/scryfall";

@Options({
  name: "ScryfallData",
  components: {
    cardData,
  },
  data() {
    return {
      Scryfall: new Scryfall(),
      cards: [] as Array<CardData>,
    };
  },
    props: {
        missing_cards: {
            type: Map,
            required: true,
        },
    },
  methods: {
    async get_bulk_cards(cards: Map<string, number>) {
      const card_names = Array.from(cards.keys());
      this.cards = await this.Scryfall.get_card_bulk(card_names);
    },
  },
  watch: {
    missing_cards: {
      immediate: true,
      async handler() {
        if(this.missing_cards && this.missing_cards.size === 0) {
          return;
        }
        await this.get_bulk_cards(this.missing_cards);
      },
    },
  },
})
export default class ScryfallData extends Vue {}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.card-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
