<template>
  <div>
    <h1>This is the main page</h1>
    <br>
    <button @click="visitProducts">See products</button>
  </div>
</template>

<script>
  export default {
    methods: {
      visitProducts() {
        this.$router.push('/products');
      }
    }
  } 
</script>

<style>
</style>
