<template>
  <section class="container">
    <logo></logo>
    <br><br>
    <h1>Test</h1>
    <!-- <a href="/users">Users</a> -->
    <!-- nuxt-link prevents reloading the entire page to act like a SPA -->
    <!-- <router-link></router-link> VueJS version -->
    <nuxt-link to="/users">Users</nuxt-link>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
