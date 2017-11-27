<template>
  <div v-show="item.showHistory || showHistory">
    <div class="routeLine" v-for="pair of pointPairs"  :style="lineStyle(pair)"></div>
    <div class="historyRoute" v-for="point of historyPoints"  :style="style(point)"></div>
  </div>
</template>

<script>
  import dm from '../dataManager'

  export default {
    name: "HistoryRoute",
    props: ['item', 'showHistory'],
    methods: {
      style(point) {
        //var len = point.epcCode.length-1;
        if(point.xlocation != this.item.lastLocation.x && point.ylocation != this.item.lastLocation.y) {
            return "position: absolute; left: " + (point.xlocation - 5) + "px; top: " + (point.ylocation - 5) + "px; background-color: "+ point.color + "; width: 10px; height: 10px;opacity: " + this.getOpacity(new Date(point.lastread)) 
        }
        else {
            return "display: none"
        }
      },
      lineStyle(pair) {
        const dx = pair.to.xlocation - pair.from.xlocation;
        const dy = pair.to.ylocation - pair.from.ylocation;

        const distance = Math.sqrt((dx*dx)+(dy*dy));
        const angle = Math.atan2(dy, dx);

        return "transform: translate(" + pair.from.xlocation + "px, " + pair.from.ylocation + "px) rotate(" + angle + "rad); width: " + distance + "px;"
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
          return "0.3";
        }
      }
    },
    computed: {
      pointPairs() {
        const pairs = [];
        for (var i = 1; i < this.historyPoints.length; i++) {
          pairs.push({ 
            from: this.historyPoints[i-1],
            to: this.historyPoints[i]
          });
        }
        return pairs;
      }
    },
    data() {
      return {
          historyPoints: []
      }
    },

    mounted() {
      setInterval(() => {
          dm.getByEpc(this.item.epc, 100).then(x => {
            this.historyPoints = x;
          });
      }, 1000);    
    }
  }
</script>

<style>
  .historyRoute {
      border: 1px solid black;
      border-radius: 15px 
  }
  .routeLine {
    height: 1px;
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    transform-origin: 0 0;
  }
</style>
