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
            this.getOpacity(new Date(point.lastread));
            return "position: absolute; left: " + (point.xlocation - 5) + "px; top: " + (point.ylocation - 5) + "px; background-color: lightgreen; width: 10px; height: 10px;"
        }
        else {
            return "display: none"
        }
      },
      getOpacity(pointTime){
        var now = new Date();
        console.log(now);
        console.log(pointTime);
        console.log(now.getTime() - pointTime.getTime());
      }
    },
    
    data() {
      return {
          historyPoints: []
      }
    },

    mounted() {
        setInterval(() => {
            dm.getByEpc(this.item.epc, 10).then(x => {
                this.historyPoints = x;
            });
        }, 2000);    
    }
  }
</script>

<style>
  .historyRoute {
      border: 1px solid black;
      border-radius: 15px 
  }
</style>
