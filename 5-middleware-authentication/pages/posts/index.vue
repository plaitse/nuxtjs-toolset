<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  // middleware: 'log',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  components: {
    PostList
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
