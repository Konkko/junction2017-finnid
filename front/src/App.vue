<template>
  <div>
    <script type="text/x-template" id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  &nbsp
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
    <div id="app">
      <div style="float: left; width: 200px;">
        <List :items="items" v-on:selectedItemOnList="onSelectItemOnList" />
      </div>
      <GroundPlan style="float: left;" :items="items" />
    </div>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GroundPlan from './components/GroundPlan.vue'
import List from './components/List.vue'
import demoData from './demoData'
import dataManager from './dataManager'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GroundPlan,
    List
  },
  mounted() {
    this.getAll();

    setInterval(() => {
      this.getAll();
    }, 5000);
  },
  methods: {
    getAll() {
      dataManager.getAllItems().then(x => {
        let items = x.map(this.epcToItem);
        items = items.concat(demoData.items);
        this.items = items.map(this.addHilightAttribute);
      });
    },
    addHilightAttribute(item) {
      if (this.selectedId !== null && item.productId !== null && this.selectedId === item.productId) {
        item.hilight = true;
      } else {
        item.hilight = false;
      }
      return item;
    },
    itemToStall(location) {
      let bestIndex = -1;
      let bestDelta = Number.MAX_VALUE;

      const tolerance = 5.0;

      for (let s = 0; s < demoData.stalls.length; s++) {
        const stallLocation = demoData.stalls[s].location;

        const dx1 = location.x - stallLocation.x;
        const dx2 = location.x - (stallLocation.x + stallLocation.width);
        let dx = Math.abs(dx1 + dx2);
        dx -= stallLocation.width;
        dx = Math.max(0, dx);

        const dy1 = location.y - stallLocation.y;
        const dy2 = location.y - (stallLocation.y + stallLocation.height);
        let dy = Math.abs(dy1 + dy2);
        dy -= stallLocation.height;
        dy = Math.max(0, dy);

        const delta = Math.sqrt((dx*dx) + (dy*dy));

        if (delta < bestDelta && delta <= tolerance) {
          bestDelta = delta;
          bestIndex = s;
        }
      }

      if (bestIndex >= 0) {
        return demoData.stalls[bestIndex].id;
      }
      else {
        return null;
      }
    },
    epcToItem(epc) {
      const epcCodeToProductId = str => {
        let num = 0;
        for (let i = 0; i < str.length; i++) {
          num += str.charCodeAt(i);
        }
        const productIndex = num % demoData.products.length;
        return demoData.products[productIndex].id;
      }

      const worldScale = 1.0;

      const location = {
        x: epc.xlocation * worldScale,
        y: epc.ylocation * worldScale
      }

      return {
        epc: epc.epcCode,
        productId: epcCodeToProductId(epc.epcCode),
        lastLocation: location,
        stallId: this.itemToStall(location)
      }
    },
    onSelectItemOnList(selectedId) {
      this.selectedId = selectedId;
    },
  },
  data() {
    return {
      items: [],
      selectedId: null
    }
  },
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
