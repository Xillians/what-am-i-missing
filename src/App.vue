<template>
  <Header></Header>
  <mainBody></mainBody>
</template>

<script>
import Header from "./components/header.vue";
import mainBody from "./components/mainBody.vue";

export default {
  name: "App",
  components: {
    Header,
    mainBody,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0%;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
  gap: 10px;
}
</style>
