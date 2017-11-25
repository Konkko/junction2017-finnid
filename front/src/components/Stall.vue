<template>
  <div class="stall" v-bind:class="[statusClass]" v-bind:style="style">
   {{ items.length }} / {{ model.approxCapacity }}
  </div>
</template>
<script>
export default {
  name: 'Stall',
  data() {
    return {}
  },
  props: ['model', 'items'],
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
      if (this.items.length === 0 || ratio <= (1/3)) {
        return 'status-empty';
      }
      else if (ratio <= 2/3) {
        return 'status-low';
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
  }

  .status-empty {
    background-color: #F00;
  }

  .status-low {
    background-color: #AA0;
  }

  .status-full {
    background-color: #0F0;
  }
</style>
