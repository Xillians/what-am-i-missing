<template>    
    <img :src="source"/>
</template>

<script>
export default {
    name: "baseImage",
    props: ["source"]
}
</script>


<style scoped>
.input {
  position: relative;
  resize: none;
  animation: .5s fadeIn;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opactiy: 1;
  }
}
</style>