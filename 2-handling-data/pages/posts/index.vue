<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  /* If we use data() where loadedPosts is already precised, asyncData() will merge the new data with it
    If we don't use it, loadedPosts will be created by asyncData() */

  /* @@@ --- !!! AND fetch can be replaced by nuxtServerInit in the store !!! --- @@@ 
    --> if we need to use this data in several components */
  // // !!! asyncData not optimal for VueX, we use fetch instead
  // // asyncData(context) {
  // fetch(context) { // -> Better for VueX to pre-populate the store
  //   if (context.store.state.loadedPosts.length > 0) return;
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: '1',
  //             title: 'Hello',
  //             previewText: 'This is my first post',
  //             thumbnail: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
  //           },
  //           {
  //             id: '2',
  //             title: 'Hey',
  //             previewText: 'This is my second post',
  //             thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
  //           },
  //           {
  //             id: '3',
  //             title: 'Hi',
  //             previewText: 'This is my third post',
  //             thumbnail: 'https://cdn.nextgov.com/media/img/upload/2018/08/29/082918fingerprintNG/860x394.jpg'
  //           } 
  //         ]
  //       });   
  //     }, 1500); 
  //   })
  //   .then(data => {
  //     // return data; --> We return only for asyncData method
  //     context.store.commit('setPosts', data.loadedPosts);
  //   })
  //   .catch(e => (
  //     context.error(new Error())
  //   ));
  // },
  components: {
    PostList
  },
  // !!! not optimal for VueX
  // created() {
  //   this.$store.dispatch('setPosts', this.loadedPosts);
  // }
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
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
