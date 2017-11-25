<template>
  <div v-tooltip="{content: '<center>' + this.itemName(this.item.productId) + '<br />' + this.item.epc + '</center>'}" class="point" :style="style"
       :class="{hilightStyle: item.hilight}">
    <img src="../assets/point.png" width="20"/>
  </div>
</template>

<script>
  import demoData from '../demoData';

  export default {
    name: "Item",
    props: ['item'],
    computed: {
      style() {
        return "position: absolute; left: " + (this.visualLocation.x - 8) + "px; top: " + (this.visualLocation.y - 25) + "px; width: 17px; height: 24px;";
      },
      location() {
        return this.item.lastLocation;
      }
    },
    methods: {
      itemName(id) {
        this.name = demoData.getProductName(id);
        return this.name;
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
        name: "",
        visualLocation: this.item.lastLocation
      }
    }
  }
</script>

<style>
  .tooltip {
    display: block !important;
    z-index: 10000;
  }

  .tooltip .tooltip-inner {
    background: #F9FBFC;
    color: black;
    border-radius: 16px;
    padding: 5px 10px 4px;
    border-width: 2px;
    border-style: solid;
  }

  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 2px;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  .tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }

  .tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }

  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }

  .tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }

  .tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
  }

  .tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
  }

  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }

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
