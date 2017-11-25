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
        var len = point.epcCode.length-1;
        if(point.xlocation != this.item.lastLocation.x && point.ylocation != this.item.lastLocation.y) {
            return "position: absolute; left: " + (point.xlocation - 5) + "px; top: " + (point.ylocation - 5) + "px; background-color: #"+ point.epcCode.substring(len-4,len) + "; width: 10px; height: 10px;opacity: " + this.getOpacity(new Date(point.lastread)) 
        }
        else {
            return "display: none"
        }
      },
      getOpacity(pointTime){
        var now = new Date();
        pointTime.setHours(pointTime.getHours() + 2);
        var dif = now.getTime() - pointTime.getTime(); 
        if(dif < 10*60*1000){
          //console.log(dif/60000 + " opa: " + (1-(dif/60000/10)));
          return 1-(dif/60000/10);
        }
        else{
          return "0";
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
