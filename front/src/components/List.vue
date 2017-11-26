<template>
  <div class="list">
    <modal v-if="showStatisticsModal" @close="showStatisticsModal = false">
      <h3 slot="header">Statistics:</h3>
      <div slot="body">
        <!--<div class="stall-item" v-for="item in modalItems.items">-->
          <!--ProductId: {{ item.productId }}-->
        <!--</div>-->
        Much important analytics things...
      </div>
    </modal>

    <div class="checkboxes-div">
      <input type="checkbox" v-model="heatmap">Show heatmap<br />
      <input type="checkbox" v-model="checked">Show history<br /><br />
      <button class="button" @click="showStatistics()">Statistics</button>
    </div>    
    <input type="text" v-model="search" placeholder="search" style="width: 100%;">
    <p style="color: black">Products:</p>
    <div class="list-wrapper">
      <template v-for="(value, key) in foundProducts">
        <ListItem :name="key" :product="value" v-on:selectedItemOnList="onSelectItemOnList" :lastSelected="lastSelected" />
      </template>
    </div>
  </div>
</template>

<style>
  .list{
    background-color: #DEE5EE;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  }
  h1 {
    margin-top: 0;
  }
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
        checked: false,
        showStatisticsModal: false,
        search: ''
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
    computed: {
      foundProducts() {
        let result = {};
        for (let key in this.products) {
            if (this.products.hasOwnProperty(key)) {
              if (key.toLowerCase().includes(this.search.toLowerCase())) {
                result[key] = this.products[key];
              }
            }
        }
        return result;
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
      },
      showStatistics() {
        this.showStatisticsModal = true;
      }
    }
  }
</script>
