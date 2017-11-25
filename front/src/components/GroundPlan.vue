<template>
  <div class="ground-plan">
    <img src="../assets/groundplan.jpg" />

    <template v-for="(child, index) in items">
      <Item :x="child.x" :y="child.y"></Item>
    </template>

    <template v-for="stall in stalls">
      <Stall :model="stall"></Stall>
    </template>

  </div>
</template>

<script>
  import Item from './Item.vue';
  import Stall from './Stall.vue';
  import DemoData from '../demoData';

  export default {
    name: "GroundPlan",
    components: {
      Item,
      Stall
    },
    props: ['items'],
    data() {
      return {
        stalls: DemoData.stalls
      }
    }
  }
</script>

<style>
  .ground-plan {
    position: relative;
  }

  img {
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
