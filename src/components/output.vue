<template>
  <div class="output" v-if="showOutput">
    <textarea id="output" class="textArea" :value="formattedText" readonly />
    <base-button id="`copy`" text="clipboard" @click="copyToClipboard" />
    <div id="rarities">
      commons: {{ rarities.common }} <br />
      uncommons: {{ rarities.uncommon }} <br />
      rares: {{ rarities.rare }} <br />
      mythic rares: {{ rarities.mythic }} <br />
      Estimated price: <br>
      ${{prices.usd}} <br>
      €{{prices.eur}}
    </div>
    <div class="imageBox">
      <div v-for="object in scryfallInfo" v-bind:key="object.image">
        <baseImage :source="object.image" />
      </div>
    </div>
  </div>
</template>

<script>
import baseButton from "./basic components/btn.vue";
import baseImage from "./basic components/image.vue";

export default {
  name: "outputData",
  props: ["outputText", "scryfallInfo"],
  components: { baseButton, baseImage },
  watch: {
    outputText: function () {
      if (!this.showOutput) this.showOutput = true;
      this.formattedText = this.outputText.join("\n");
      this.resetData();
    },
    scryfallInfo: function () {
      let outputWithSets = [];
      this.scryfallInfo.forEach((card) => {
        this.rarities[card.rarity] += card.qty;
        let prices = this.prices;
        prices.usd = this.updatePrice(prices.usd, card.prices.usd);
        prices.usd_foil = this.updatePrice(prices.usd_foil, card.prices.usd_foil);
        prices.usd_etched = this.updatePrice(prices.usd_etched, card.prices.usd_etched);
        prices.eur = this.updatePrice(prices.eur, card.prices.eur);
        prices.eur_foil = this.updatePrice(prices.eur_foil, card.prices.eur_foil);
        prices.tix = this.updatePrice(prices.tix, card.prices.tix);
        const formattedTextInfo = `${card.qty} ${card.name} [${card.sets[0].name}]`;
        outputWithSets.push(formattedTextInfo);
      });
      this.formattedText = outputWithSets.join('\n');
    },
  },
  data() {
    return {
      showOutput: false,
      formattedText: "output",
      rarities: {
        common: 0,
        uncommon: 0,
        rare: 0,
        mythic: 0,
      },
      prices: {
        usd: 0,
        usd_foil: 0,
        usd_etched: 0,
        eur: 0,
        eur_foil: 0,
        tix: 0
      }
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
    updatePrice(originalValue, newValue) {
      if(newValue != null) {
        const number = Number(newValue);
        originalValue += number;
      }
      return Math.round(originalValue * 100) / 100;
    },
    resetData() {
      this.rarities.common = 0;
      this.rarities.uncommon = 0;
      this.rarities.rare = 0;
      this.rarities.mythic = 0;
      this.prices.usd = 0;
      this.prices.usd_foil = 0;
      this.prices.usd_etched = 0;
      this.prices.eur = 0;
      this.prices.eur_foi = 0;
      this.prices.usd = 0;
    }
  },
};
</script>

<style scoped>
.imageBox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: auto;
}
.output {
  position: relative;
  height: 40%;
  margin-top: 20px;
}
.textArea {
  width: 40%;
  height: 120px;
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