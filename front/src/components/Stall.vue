<template>
  <div>
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Stall: {{modalItems.stallId}}</h3>
        <div slot="body">
            <div class="stall-item" v-for="item in modalItems.items">
              {{ item.name }} ({{item.count}})
            </div>
        </div>
      </modal>
    <div class="stall" v-bind:class="[statusClass, {highlight: stallHilight}]" @click="onClick(items)"v-bind:style="style">
    {{ items.length }} / {{ model.approxCapacity }}
    </div>
  </div>
</template>
<script>

import demoData from '../demoData';
export default {
  name: 'Stall',
  data() {
    return {
      showModal: false,
      modalItems: {},
      stallHilight: false
    }
  },
  props: ['model', 'items', 'selectedId'],
  methods: {
    onClick(items) {
      this.showModal = true;
      var stallItems = {};
      for(var i=0;i<items.length;i++){
        var productId = items[i].productId; 
        for(var j=0;j<demoData.products.length;j++){
          var product = demoData.products[j];
          if(product.id === productId){
            if(!stallItems[productId]){
              stallItems[productId] = { name: product.name, count: 1 };             
            }
            else{
               stallItems[items[i].productId].count++;
            }
            break;
          }
        }
      }
      this.modalItems = {
        stallId: items[0].stallId,
        items: stallItems
      }
    }
  },
  watch: {
    selectedId: function(val) {
      if (this.items[0] !== undefined && val === this.items[0].productId) {
        this.stallHilight = true;
      } else {
        this.stallHilight = false;
      }

    }
  },
  computed: {
    style() {
      const location = this.model.location;
      return 'width: ' + location.width + 'px;' +
        'height: ' + location.height + 'px;' +
        'left: ' + location.x + 'px;' +
        'top: ' + location.y + 'px;';
    },
    statusClass() {
      const ratio = this.items.length / this.model.approxCapacity;
      if (this.items.length === 0) {
        return 'status-empty';
      }
      else if (ratio <= 1/3) {
        return 'status-low';
      }
      else if (ratio <= 2/3) {

        return 'status-medium';
      }
      else {
        return 'status-full';
      }
    }
  }
}
</script>

<style scoped>
  .highlight {
    box-shadow: 0px 0px 10px 5px rgb(78, 192, 226) !important;
    border: 20px solid rgb(71, 182, 211);
  }

  .stall {
    cursor: pointer;
    border: 2px solid black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stall:hover {
    box-shadow: 0 0 20px rgba(87, 116, 149, 1);
  }

  .status-empty {
    background-color: #F00;
  }

  .status-low {
    background-color: #ff8300;
  }

  .status-medium {
    background-color: #d6ff00;
  }

  .status-full {
    background-color: #0F0;
  }
  .stall-item{
    text-align: left;
  }
</style>
