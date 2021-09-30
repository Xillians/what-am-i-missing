<template>
  <div class="output" v-if="showOutput">
    <textarea
      id="output"
      class="textArea"
      :value="formattedText"
      readonly
    />
    <base-button id="`copy`" text="clipboard" @click="copyToClipboard"/>
  </div>
</template>

<script>
import baseButton from "./basic components/btn.vue";

export default {
  name: "outputData",
  props: ["decklist", "collection", "outputText"],
  components: { baseButton },
  watch: {
    outputText: function () {
      if (!this.showOutput) this.showOutput = true;
      this.formattedText = this.outputText.join("\n");
    },
  },
  data() {
    return {
      showOutput: false,
      formattedText: "output",
    };
  },
  methods: {
    copyToClipboard() {
      var output = document.getElementById("output");

      output.select();
      output.setSelectionRange(0, 999999);
      navigator.clipboard.writeText(output.value);

      alert("copied to clipboard!");
    },
  },
};
</script>

<style scoped>
.output {
  position: relative;
  height: 40%;
  margin-top: 20px;
}
.textArea {
  width: 40%;
  height: 75px;
  position: relative;
  margin-bottom: 10px;
  margin-top: 5px;
  resize: none;
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