<template>
  <div class="ground-plan" :class="{'heat-map': showHeatMap}" :style="style">
    <template v-for="stall in stalls">
      <Stall :model="stall" :items="getByStallId(stall.id)" :selectedId="selectedId"></Stall>
    </template>

    <template v-for="(child, index) in looseItems">
      <Item :item="child"></Item>
    </template>

    <template v-if="showHistory" v-for="item in items">
      <HistoryRoute :item="item"/>
    </template>

  </div>
</template>

<script>
  import Item from './Item.vue';
  import HistoryRoute from './HistoryRoute.vue'
  import Stall from './Stall.vue';
  import DemoData from '../demoData';

  export default {
    name: "GroundPlan",
    components: {
      Item,
      Stall,
      HistoryRoute
    },
    props: ['items', 'showHistory', 'selectedId', 'showHeatMap'],
    data() {
      return {
        stalls: DemoData.stalls,
        checked: false
      }
    },
    computed: {
      style() {
        let d = DemoData.dimensions;
        return "width: " + d.width + "px;" +
          "height: " + d.height + "px;";
      },
      looseItems() {
        return this.items.filter(i => i.stallId == null);
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
    overflow: hidden;
    background-color: #DEE5EE;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    margin-top: 16px;
  }

  .heat-map {
    background-image: url("../assets/heatmap.png");
    background-size: 100% 100%;
  }

  img {
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
