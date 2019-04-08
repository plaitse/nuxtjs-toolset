<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <!-- Here we use a normal anchor tag because if we get to this page
      it means that Nuxt has crashed and therefore router-link doesn't work anymore -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
