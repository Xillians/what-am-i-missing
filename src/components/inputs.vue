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
          this.$emit(eventName, event.target.value)
      }
  }
};
</script>

<style scoped>
.input {
  width: 40%;
  position: relative;
  margin-bottom: 10px;
  margin-top: 5px;
  margin-right: 5%;
}
</style>