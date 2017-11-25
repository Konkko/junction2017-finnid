<template>
  <div class="point" :style="style" :class="{hilightStyle: item.hilight}" :title="item.epc">
    <img src="../assets/point.png" width="20" />
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item'],
    computed: {
      style() {
        return "position: absolute; left: " + (this.item.lastLocation.x - 8) + "px; top: " + (this.item.lastLocation.y - 12) + "px; width: 17px; height: 24px;";
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

  .point:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .hilightStyle {
    /*background-color: blue !important;*/
    /*width: 30px !important;*/
    /*height: 30px !important;*/
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 3px solid rgba(81, 203, 238, 1);
  }
</style>
