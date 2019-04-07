<template>
  <div>
    <!-- <Header /> -->
    <h1>This is the main page</h1>
    <br>
    <button @click="visitProducts">See products</button>
  </div>
</template>

<script>
  // import Header from '~/components/Header.vue'; --> Instead of importing locally, set in /layouts

  export default {
    methods: {
      visitProducts() {
        this.$router.push('/products');
      }
    },
    // components: {
    //   Header
    // }
  } 
</script>

<style>
</style>
