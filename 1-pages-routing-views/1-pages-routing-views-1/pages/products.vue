<template>
  <div>
    <h1>This is the products page (products.vue)</h1>
    <br>  
    <!-- <a href="/products/1">See product 1</a> -->
    <!-- nuxt-link prevents reloading the entire page to act like a SPA -->
    <!-- <router-link></router-link> VueJS version -->
    <nuxt-link to="/products/1">See product 1</nuxt-link>
    <br>
    <nuxt-link to="/products/2">See product 2</nuxt-link>
    <br><br>
    <p><b>And below is a nuxt-child (products/index.vue):</b></p>
    <p>This is useful when we want to exchange certain parts of the page depending on the subroute</p>
    <br>
    <nuxt-child/>
  </div>
</template>

<script>
  export default {
    layout: 'products'
  }
</script>
