<template>
  <div>
    <h1>This is the projects pid page #{{ $route.params.pid }}</h1>
    <br>
  </div>
</template>

<script>
  export default {
    // Validate ensures us that only valid dynamic segments are reachable
    validate (data) {
      console.log('data', data);
      // return true;
      // return data.params.pid == 2;
      // console.log('id : ', /^\d+$/.test(data.params.id))
      return  true;
    }
  }
</script>
