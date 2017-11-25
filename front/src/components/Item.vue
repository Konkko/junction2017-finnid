<template>
  <div :style="style">
    <!--<img src="../assets/item.png" />-->
  </div>
</template>

<style>
</style>

<script>
  export default {
    name: "Item",
    props: ['location'],
    computed: {
      style() {
        return "position: absolute; top: " + this.location.x + "px; left: " + this.location.y + "px; background-color: red; width: 15px; height: 15px;"
      }
    },
    data() {
      return {

      }
    }
  }
</script>
