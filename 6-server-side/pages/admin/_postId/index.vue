<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    return axios.get('https://nuxtjs-toolset.firebaseio.com/posts/' + context.params.postId + '.json')
      .then(response => {
        console.log(response);
        return {
          loadedPost: {...response.data, id: context.params.postId}
        }
      })
      .catch(error => console.log(error));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin');
        })
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
