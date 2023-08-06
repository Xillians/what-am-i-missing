<template >
    <div class="container">
    <textarea disabled v-model="decklist" placeholder="output"></textarea>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "ListOutput",
    props: {
        missing_cards: {
            type: Map,
            required: true,
        },
    },
    methods: {
        convert_map_to_string(map: Map<string, number>) {
            let output = "";
            map.forEach((quantity: number, name: string) => {
                output += `${quantity} ${name}\n`;
            });
            return output;
        },
    },
    watch: {
        missing_cards: {
            immediate: true,
            handler() {
                this.decklist = this.convert_map_to_string(this.missing_cards);
            },
        },
    },
})
export default class ListOutput extends Vue {}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
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