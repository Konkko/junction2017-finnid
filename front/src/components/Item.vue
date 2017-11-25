<template>
  <div class="point" :style="style" :class="{hilightStyle: item.hilight}" :title="item.epc">
    <img src="../assets/point.png" width="20" />
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item'],
    computed: {
      style() {
        return "position: absolute; left: " + (this.visualLocation.x - 8) + "px; top: " + (this.visualLocation.y - 12) + "px; width: 17px; height: 24px;";
      },
      location() {
        return this.item.lastLocation;
      }
    },
    watch: {
      location(newLocation, oldLocation) {
        var vm = this
        function animate () {          
          const dx = vm.location.x - vm.visualLocation.x;
          const dy = vm.location.y - vm.visualLocation.y;

          const distance = Math.sqrt((dx*dx)+(dy*dy));

          if (distance <= 1.0) {
            vm.visualLocation = newLocation;            
          }
          else {
            vm.visualLocation = {
              x: vm.visualLocation.x + (dx * 0.05),
              y: vm.visualLocation.y + (dy * 0.05)
            };
            requestAnimationFrame(animate);
          }
        }
        animate();
      }
    },
    data() {
      return {
        visualLocation: this.item.lastLocation
      }
    }
  }
</script>

<style>
  .item {
    border: 1px solid black;
  }

  .point:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .hilightStyle {
    /*background-color: blue !important;*/
    /*width: 30px !important;*/
    /*height: 30px !important;*/
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 3px solid rgba(81, 203, 238, 1);
  }
</style>
