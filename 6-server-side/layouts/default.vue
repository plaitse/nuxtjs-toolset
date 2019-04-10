<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"/>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSidenav.vue';

export default {
  // middleware: 'log',
  data() {
    return {
      displaySidenav: false
    }
  },
  components: {
    TheHeader,
    TheSidenav
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
