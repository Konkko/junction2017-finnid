<template>
  <div class="list-item" v-on:click="isClicked" :selectedId="selectedId" :style="generateStyles()">
      {{ name }}
  </div>
</template>

<style>
  .list-item:hover {
    background-color: #e5e7e8;
  }
</style>

<script>
  export default {
    name: "ListItem",
    props: ['name', 'product', 'lastSelected'],
    data() {
      return {
        selected: false,
        selectedId: null,
      }
    },
    watch: {
      lastSelected: function(val) {
        if (val !== this.selectedId) {
          this.selected = false;
        }
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
        if (this.selected) {
          this.selected = false;
          this.selectedId = 0;
        } else if (this.selected === false) {
          this.selected = true;
          this.selectedId = this.product[0].productId;
        }

        this.$emit('selectedItemOnList', this.selectedId);
      }
    },
  }
</script>
