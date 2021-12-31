<template lang="">
  <div class="admin-post-page">
    <section class="update-form">
      <!-- NOTE:  postはAdminPostFormにてpropsに与えたもの。 -->
      <!-- NOTE:  :をつけることでloadedPostのような変数を指定できる -->
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script lang="ts">
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import Vue from 'vue'

export default Vue.extend({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: 'Maximilian',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink:
          'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      },
    }
  },
})
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
