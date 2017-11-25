<template>
  <div class="historyRoute" :style="style">
    <!--<img src="../assets/item.png" />-->
  </div>
</template>

<script>
  import dm from '../dataManager'

  export default {
    name: "HistoryRoute",
    props: ['item'],
    computed: {
      style() {
        return "position: absolute; left: " + this.item.lastLocation.x + "px; top: " + this.item.lastLocation.y + "px; background-color: lightgreen; width: 10px; height: 10px;"
      }
    },
    
    data() {
      return {

      }
    },

    mounted() {
        dm.getByEpc(this.item.epc).then(x => {
            console.log(x);
        });
    }
  }
</script>

<style>
  .historyRoute {
      border: 1px solid black;
      border-radius: 10px 
  }
</style>
