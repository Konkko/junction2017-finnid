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

export default {
  name: 'app',
  components: {
    HelloWorld,
    GroundPlan,
    List
  },
  data() {
    return {
      items: demoData.items,
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
