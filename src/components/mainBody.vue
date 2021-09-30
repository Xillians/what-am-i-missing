<template>
  <div>
    <inputs :name="`decklist`" @ondecklistUpdate="decklist = $event" />
    <inputs :name="`collection`" @oncollectionUpdate="collection = $event" />
    <compareData
      :decklist="decklist"
      :collection="collection"
      @onDataCompared="outputResult = $event"
    />
    <outputData 
      :outputText="outputResult"
      :decklist="decklist"
      :collection="collection"
    />
  </div>
</template>

<script>
import inputs from './basic components/inputs.vue';
import compareData from './compareData.vue';
import outputData from './output.vue';

export default {
  name: "mainBody",
  data() {
    return {
      decklist:"",
      collection:"",
      outputResult:""
    }
  },
  components: {
      inputs,
      compareData,
      outputData,
  },
  props: [
  ]
};
</script>

<style scoped>
</style>