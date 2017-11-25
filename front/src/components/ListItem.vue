<template>
  <div>
      {{ name }}
  </div>
</template>

<style>
</style>

<script>
  export default {
    name: "ListItem",
    props: ['name', 'product'],
    data() {
      return {
      }
    }
  }
</script>
