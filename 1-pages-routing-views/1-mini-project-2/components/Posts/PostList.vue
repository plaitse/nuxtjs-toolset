<template>
  <section class="post-list">
    <PostPreview
    id="1"
    :is-admin="isAdmin"
    title="Hello"
    previewText="This is my first post"
    thumbnail="https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg" />
  <PostPreview
    id="2"
    :is-admin="isAdmin"
    title="Hey"
    previewText="This is my second post"
    thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"/>
  <PostPreview
    id="3"
    :is-admin="isAdmin"
    title="Hi"
    previewText="This is my third post"
    thumbnail="https://cdn.nextgov.com/media/img/upload/2018/08/29/082918fingerprintNG/860x394.jpg"/>
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue';

export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
