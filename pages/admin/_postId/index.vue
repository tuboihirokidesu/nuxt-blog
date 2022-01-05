<template lang="">
  <div class="admin-post-page">
    <section class="update-form">
      <!-- NOTE:  postはAdminPostFormにてpropsに与えたもの。 -->
      <!-- NOTE:  :をつけることでloadedPostsのような変数を指定できる -->
      <!-- @submit="onSubmitted"  -->
      <AdminPostForm :post="loadedPosts" />
    </section>
  </div>
</template>

<script lang="ts">
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import Vue from 'vue'
import { Blog } from '../../../types/index'
import firebase from 'firebase/compat/app'

export default Vue.extend({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  // asyncData(context) {
  //   return firebase
  //     .firestore()
  //     .collection('blog')
  //     .get(
  //       'https://nuxt-blog.firebaseio.com/posts/' +
  //         context.params.postId +
  //         '.json'
  //     )
  //     .then((res) => {
  //       return {
  //         loadedPosts: { ...res.data, id: context.params.postId },
  //       }
  //     })
  //     .catch((e) => context.error())
  // },
  // methods: {
  //   onSubmitted(editedPost: Blog) {
  //     this.$store.dispatch('editPost', editedPost).then(() => {
  //       this.$router.push('/admin')
  //     })
  //   },
  // },
})
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
</style>
