<template>
  <div>
    <textarea 
        class="input" 
        :placeholder="name"
        v-bind:id="name"
        @input=updateContent
    />
  </div>
</template>

<script>
export default {
  name: "inputs",
  props: ["name"],
  methods: {
      updateContent(event) {
          const eventName = `on${this.name}Update`;
          const cardList = new Map();
          let cardName;
          let amount;
          const list = event.target.value.split(/\n/);
          
          list.forEach(card => {
            [cardName, amount] = this.formatData(card);
            cardList.set(cardName, { qty: amount});
          });
          
          this.$emit(eventName, cardList)
      },
      formatData(text) {
        let cardAndAmount = this.trimMetaData(text);
        let amount = this.quantifyAmount(cardAndAmount);
        let cardName = this.removeAmount(cardAndAmount);
        if(cardName.endsWith(' '))
          cardName = cardName.slice(0, -1);
        return [cardName, amount];
      },
      trimMetaData(text) {
        let trimmedText = text;
        if(text.includes('['))
          trimmedText = text.split('[')[0];
        return trimmedText;
      },
      quantifyAmount(text) {
        let quantity = text.split(' ')[0];
        if(quantity.includes('x'))
          quantity = quantity.replace('x', '');
        quantity = Number(quantity);
        return quantity;
      },
      removeAmount(text) {
        const split = text.split(' ');
        split.shift();
        return split.join(' ');
      }
  }
};
</script>

<style scoped>
.input {
  width: 40%;
  height: 75px;
  position: relative;
  margin-bottom: 10px;
  margin-top: 5px;
  resize: none;
  animation: 1s fadeIn;
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