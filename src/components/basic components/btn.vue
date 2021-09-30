<template>
  <div>
    <button v-bind:id="id" class="btn">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "baseButton",
  props: ["id", "text"],
};
</script>


<style scoped>
.btn {
  width: 105px;
  height: 30px;
  background-color: #b9c7ee;
  border-radius: 50px;
  animation: 0.5s fadeIn;
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