<template>
  <div :style="style" :class="{hilightStyle: item.hilight}" :title="item.epc">
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item'],
    computed: {
      style() {
        return "position: absolute; left: " + (this.item.lastLocation.x - 7) + "px; top: " + (this.item.lastLocation.y - 7) + "px; background-color: red; width: 15px; height: 15px;";
      }
    },
    methods: {
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  .item {
    border: 1px solid black;
  }

  .hilightStyle {
    background-color: blue !important;
    width: 30px !important;
    height: 30px !important;
  }
</style>
