<template>
  <div>
    <h1>Users - Second way to build a route</h1>
    <br>
    <label for="route">Enter something and press the button</label>
    <input type="text" id="route" v-model="userId">
    <br>
    <p>You will navigate to: {{ userId }}</p>
    <br>
    <button @click="onLoadUser">Load user</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userId);
      }
    }
  }
</script>
