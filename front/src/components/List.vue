<template>
  <div>
    <div class="checkboxes-div">
      <input type="checkbox" v-model="heatmap">Show heatmap<br />
      <input type="checkbox" v-model="checked">Show history<br /><br />
      <button class="button">Statistics</button>
    </div>

    <p style="color: black">Choose a product:</p>

    <template v-for="(value, key) in products">
      <ListItem :name="key" :product="value" v-on:selectedItemOnList="onSelectItemOnList" :lastSelected="lastSelected" />
    </template>
  </div>
</template>

<style>
  .checkboxes-div {
    margin-bottom: 20px;
  }
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
  }
</style>

<script>
  import ListItem from './ListItem.vue'
  import demoData from '../demoData';

  export default {
    name: "List",
    props: ['items'],
    components: {
      ListItem
    },
    mounted() {
      this.updateItems();
    },
    data() {
      return {
        products: {},
        selectedId: null,
        lastSelected: null,
        heatmap: false,
        checked: false
      }
    },
    watch: {
      items: function () {
          this.updateItems()
      },
      checked: function (v) {
        this.$emit('checked', v);
      },
      heatmap: function (v) {
        this.$emit('heatmap', v);
      }
    },
    methods: {
      onSelectItemOnList(selectedId) {
        this.selectedId = selectedId;
        this.lastSelected = selectedId;
        this.$emit('selectedItemOnList', selectedId);
      },
      updateItems() {
        let that = this;
        that.products = {};

        that.items.forEach((item) => {
          demoData.products.forEach((productData) => {
            if (productData.id === item.productId) {
              if (!that.products[productData.name]) {
                that.products[productData.name] = [];
              }
              that.products[productData.name].push(item);
            }
          });
        });
      }
    }
  }
</script>
