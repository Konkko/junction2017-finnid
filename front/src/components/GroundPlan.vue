<template>
  <div class="ground-plan" :style="style">
    <img src="../assets/groundplan.jpg" />

    <template v-for="stall in stalls">
      <Stall :model="stall" :items="getByStallId(stall.id)"></Stall>
    </template>

    <template v-for="(child, index) in items">
      <Item :location="child.lastLocation"></Item>
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
    },
    computed: {
      style() {
        let d = DemoData.dimensions;
        return "width: " + d.width + "px;" +
          "height: " + d.height + "px;";
      }
    },
    methods: {
      getByStallId(stallId) {
        return this.items.filter(s => s.stallId === stallId)
      }
    }
  }
</script>

<style>
  .ground-plan {
    position: relative;
    border: 1px solid black;
  }

  img {
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
