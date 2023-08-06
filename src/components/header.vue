<template>
  <div class="header">
    <div class="nav-element">
      <h1>{{ title }}</h1>
    </div>
    <div class="nav-element">
      <img :src="question_mark" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      question_mark:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/2048px-Icon-round-Question_mark.svg.png",
    };
  },
})
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  display: flex;
  background-color: #b3d4fc;
  padding: 1rem;
  color: white;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
}
</style>
