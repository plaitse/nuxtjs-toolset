<template>
  <section class="container">
    <!-- To visit this page go to /users -->
    <logo></logo>
    <br>
    <label for="route">Enter something and press the button</label>
    <input type="text" id="route" v-model="productId">
    <br>
    <p>You will navigate to: {{ productId }}</p>
    <br>
    <button @click="onLoadProduct">Load product</button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      productId: ''
    }
  },
  methods: {
    onLoadProduct() {
      this.$router.push('/products/' + this.productId);
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
</style>
