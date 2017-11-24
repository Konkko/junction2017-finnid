<template>
  <div id="app">
    <GroundPlan />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GroundPlan from './components/GroundPlan.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GroundPlan
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
