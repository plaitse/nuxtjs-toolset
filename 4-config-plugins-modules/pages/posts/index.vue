<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
// import PostList from '@/components/Posts/PostList.vue';

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  // components: {
  //   PostList
  // },
  head: {
    title: 'This is a new title'
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
