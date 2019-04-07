<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default {
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Jesus',
        title: 'My christian post',
        content: 'Listen to my word!',
        thumbnailLink: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
      }
    }
  },
  components: {
    AdminPostForm
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
