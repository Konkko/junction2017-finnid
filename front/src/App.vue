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

export default {
  name: 'app',
  components: {
    HelloWorld,
    GroundPlan,
    List
  },
  data() {
    return {
      items: [
        {
          name: "Iphone X",
          x: 300,
          y: 500
        },
        {
          name: "Seinäkello",
          x: 400,
          y: 500
        }
      ],
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
