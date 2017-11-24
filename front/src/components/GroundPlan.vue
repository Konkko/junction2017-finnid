<template>
  <div>
    <img src="../assets/groundplan.jpg" />

    <template v-for="(child, index) in items">
      <Item :x="child.x" :y="child.y"></Item>
    </template>

  </div>
</template>

<style></style>

<script>
  import Item from './Item.vue';

  export default {
    name: "GroundPlan",
    components: {
      Item
    },
    data() {
      return {
        items: [
          {
            x: 300,
            y: 500
          },
          {
            x: 400,
            y: 500
          }
        ]
      }
    }
  }
</script>
