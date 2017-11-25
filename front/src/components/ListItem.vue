<template>
  <div v-on:click="isClicked" :style="generateStyles()">
      {{ name }}
  </div>
</template>

<style>
</style>

<script>
  export default {
    name: "ListItem",
    props: ['name', 'product'],
    data() {
      return {
        selected: false
      }
    },
    methods: {
      generateStyles() {
        if (this.selected) {
          return "cursor: pointer; background-color: #DEE5EE";
        }
        return "cursor: pointer;";
      },
      isClicked() {
        this.selected = !this.selected;
      }
    }
  }
</script>
