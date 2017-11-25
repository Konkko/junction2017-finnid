<template>
  <div>
      <div class="historyRoute" v-for="point of historyPoints"  :style="style(point)"></div>
    <!--<img src="../assets/item.png" />-->
  </div>
</template>

<script>
  import dm from '../dataManager'

  export default {
    name: "HistoryRoute",
    props: ['item'],
    methods: {
      style(point) {
        if(point.xlocation != this.item.lastLocation.x && point.ylocation != this.item.lastLocation.y) {
            return "position: absolute; left: " + point.xlocation + "px; top: " + point.ylocation + "px; background-color: lightgreen; width: 10px; height: 10px;"
        }
        else {
            return "display: none"
        }
      }
    },
    
    data() {
      return {
          historyPoints: []
      }
    },

    mounted() {
        setInterval(() => {
            dm.getByEpc(this.item.epc).then(x => {
            this.historyPoints = x;
        });
        }, 5000);    
    }
  }
</script>

<style>
  .historyRoute {
      border: 1px solid black;
      border-radius: 10px 
  }
</style>
