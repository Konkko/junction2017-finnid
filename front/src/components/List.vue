<template>
  <div>
    <template v-for="(child, index) in items">
      <ListItem :name="child.name" />
    </template>
  </div>
</template>

<style>
</style>

<script>
  import ListItem from './ListItem.vue'

  export default {
    name: "List",
    props: ['items'],
    components: {
      ListItem
    },
    data() {
      return {

      }
    }
  }
</script>
