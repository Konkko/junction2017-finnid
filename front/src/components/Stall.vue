<template>
  <div>
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Stall: {{modalItems.stallId}}</h3>
        <div slot="body">
            <div class="stall-item" v-for="item in modalItems.items">
              ProductId: {{ item.productId }}
            </div>
        </div>
      </modal>
    <div class="stall" v-bind:class="[statusClass]" @click="onClick(items)"v-bind:style="style">
    {{ items.length }} / {{ model.approxCapacity }}
    </div>
  </div>
</template>
<script>

export default {
  name: 'Stall',
  data() {
    return {
      showModal: false,
      modalItems: {}
    }
  },
  props: ['model', 'items'],
  methods: {
    onClick(items) {
      this.showModal = true;
      this.modalItems = {
        stallId: items[0].stallId,
        items: items
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
  .stall {
    border: 2px solid black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
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
