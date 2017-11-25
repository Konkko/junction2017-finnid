<template>
  <div class="item" :style="style">
    <!--<img src="../assets/item.png" />-->
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['location'],
    computed: {
      style() {
        return "position: absolute; left: " + this.location.x + "px; top: " + this.location.y + "px; background-color: red; width: 15px; height: 15px;"
      }
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
</style>
