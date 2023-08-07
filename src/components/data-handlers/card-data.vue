<template>
  <div class="card-data">
    <img
      class="thumbnail"
      :src="card.image_uris.small"
      @click="visible = true"
    />
    <message-box v-if="visible" @close="visible = false">
      <div class="dialog-body">
        <img class="enlarged-image" :src="card.image_uris.large" />
        <div class="card-info">
          <b>name:</b>
          <p>{{ card.name }}</p>
          <b> sets:</b>
          <p class="sets" v-for="set in reprints" :key="set">{{ set }},</p>
          <a :href="card.scryfall_uri">scryfall</a>
        </div>
      </div>
    </message-box>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CardData } from "@/models/card-data";
import MessageBox from "./dialog.vue";
import { Scryfall } from "@/utils/scryfall";

@Options({
  name: "cardData",
  components: {
    MessageBox,
  },
  props: {
    card: {
      type: Object as () => CardData,
      required: true,
    },
  },
  data() {
    return {
      api: new Scryfall(),
      visible: false,
      reprints: [] as string[],
    };
  },
  watch: {
    async visible(val: boolean) {
      if (val) {
        this.reprints = [];
        const response_data = await this.api.get_reprints(
          this.card.prints_search_uri
        );
        response_data.forEach((card: CardData) => {
          this.reprints.push(card.set_name);
        });
      }
    },
  },
})
export default class cardData extends Vue {}
</script>

<style scoped>
.card-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dialog-body {
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  align-self: center;
  padding: 3rem;
  flex-wrap: wrap;
}
.card-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  align-self: center;
  padding: 2rem;
  border: 0.15rem solid black;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  margin-left: 1rem;
  min-width: 25ch;
  max-height: 30vh;
  overflow: scroll;
}
.thumbnail {
  width: 10rem;
  height: 14rem;
  border: 0.15rem solid black;
  border-radius: 1rem;
  margin: 1rem;
}
.enlarged-image {
  max-width: 90%;
  max-height: 75%;
  border: 0.15rem solid black;
  border-radius: 1rem;
  margin: 1rem;
}
.sets {
  display: inline;
  margin: 1ch;
}
a {
  margin: 1ch;
}
</style>
