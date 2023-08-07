<template>
  <div class="message-box dialog-mask" @click="close">
    <div class="dialog-content">
      <div class="dialog-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "MessageBox",
  methods: {
    close() {
      this.$emit("close");
    },
  },
})
export default class MessageBox extends Vue {}
</script>

<style scoped>
.dialog-mask {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
