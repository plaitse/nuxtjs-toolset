<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  asyncData(context, callback) {
    /* SEO SOLUTION: asyncData
      This method is executed on server-side. It can ONLY be used in pages */
    setTimeout(() => {
      // First argument: error (null for no error)
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'Hello',
            previewText: 'This is my first post',
            thumbnail: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
          },
          {
            id: '2',
            title: 'Hey',
            previewText: 'This is my second post',
            thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
          },
          {
            id: '3',
            title: 'Hi',
            previewText: 'This is my third post',
            thumbnail: 'https://cdn.nextgov.com/media/img/upload/2018/08/29/082918fingerprintNG/860x394.jpg'
          } 
        ]
      });   
    }, 1500); 
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  components: {
    PostList
  },
  // created() {
    /* SEO PROBLEM: this is loaded async on client-side and Google crawler looks at the initial page
      Better using asyncData() */
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       {
  //         id: '1',
  //         title: 'Hello',
  //         previewText: 'This is my first post',
  //         thumbnail: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
  //       },
  //       {
  //         id: '2',
  //         title: 'Hey',
  //         previewText: 'This is my second post',
  //         thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
  //       },
  //       {
  //         id: '3',
  //         title: 'Hi',
  //         previewText: 'This is my third post',
  //         thumbnail: 'https://cdn.nextgov.com/media/img/upload/2018/08/29/082918fingerprintNG/860x394.jpg'
  //       } 
  //     ]
  //   }, 1500); 
  // }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/img/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
