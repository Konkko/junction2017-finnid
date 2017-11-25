<template>
  <div :style="style" :class="{hilightStyle: item.hilight}" :title="item.epc">
    <!--<img src="../assets/item.png" />-->
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item'],
    computed: {
      style() {
        return "position: absolute; left: " + this.item.lastLocation.x + "px; top: " + this.item.lastLocation.y + "px; background-color: red; width: 15px; height: 15px;";
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
