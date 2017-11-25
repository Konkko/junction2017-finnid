<template>
  <div>
    <template v-for="(value, key) in products">
      <ListItem :name="key" :product="value" v-on:selectedItemOnList="onSelectItemOnList" :lastSelected="lastSelected" />
    </template>
  </div>
</template>

<style>
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
        lastSelected: null
      }
    },
    watch: {
      items: function () {
          this.updateItems()
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
