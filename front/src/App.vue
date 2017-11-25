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
    }, 1000);
  },
  methods: {
    getAll() {
      dataManager.getAllEpcs().then(x => {
        this.items = x.map(this.epcToItem);
        console.log(this.items);
      });
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

      return {
        productId: epcCodeToProductId(epc.epcCode),
        lastLocation: {
          x: epc.xlocation * worldScale,
          y: epc.ylocation * worldScale
        }
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
