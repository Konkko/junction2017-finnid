<template>
  <div id="app">
    <List :items="items" />
    <GroundPlan :items="items" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GroundPlan from './components/GroundPlan.vue'
import List from './components/List.vue'
import demoData from './demoData'
import dataManager from './dataManager'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GroundPlan,
    List
  },
  mounted() {
    this.getAll();

    setInterval(() => {
      this.getAll();
    }, 5000);

    this.itemToStall({x: 525, y: 525})

  },
  methods: {
    getAll() {
      dataManager.getAllEpcs().then(x => {
        this.items = x.map(this.epcToItem);
        console.log(this.items);
      });
    },
    itemToStall(location) {
      let bestIndex = -1;
      let bestDelta = Number.MAX_VALUE;

      const tolerance = 5.0;

      for (let s = 0; s < demoData.stalls.length; s++) {
        const stallLocation = demoData.stalls[s].location;
        
        const dx1 = location.x - stallLocation.x;
        const dx2 = location.x - (stallLocation.x + stallLocation.width);
        let dx = Math.abs(dx1 + dx2);
        dx -= stallLocation.width;
        dx = Math.max(0, dx);

        const dy1 = location.y - stallLocation.y;
        const dy2 = location.y - (stallLocation.y + stallLocation.height);
        let dy = Math.abs(dy1 + dy2);
        dy -= stallLocation.height;
        dy = Math.max(0, dy);

        const delta = Math.sqrt((dx*dx) + (dy*dy));

        if (delta < bestDelta && delta <= tolerance) {
          bestDelta = delta;
          bestIndex = s;
        }
      }

      if (bestIndex >= 0) {
        return demoData.stalls[bestIndex].id;
      }
      else {
        return null;
      }
    },
    epcToItem(epc) {
      const epcCodeToProductId = str => {
        let num = 0;
        for (let i = 0; i < str.length; i++) {
          num += str.charCodeAt(i);
        }
        const productIndex = num % demoData.products.length;
        return demoData.products[productIndex].id;
      }

      const worldScale = 1.0;

      const location = {
        x: epc.xlocation * worldScale,
        y: epc.ylocation * worldScale
      }

      return {
        productId: epcCodeToProductId(epc.epcCode),
        lastLocation: location,
        stallId: this.itemToStall(location) 
      }
    }
  },
  data() {
    return {
      items: demoData.items,
      epcs: [],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
