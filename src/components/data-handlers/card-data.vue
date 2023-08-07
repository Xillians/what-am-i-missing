<template>
    <div class="card-data">
      <b>{{ card.name }}</b>
      <img :src="card.image_uris.normal" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CardData } from "@/models/card-data";

@Options({
  name: "cardData",
  props: {
    card: {
      type: Object as () => CardData,
      required: true,
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
img {
  width: 223px;
  height: 310px;
}
</style>
