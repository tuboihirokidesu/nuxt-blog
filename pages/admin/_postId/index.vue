<template lang="">
  <div class="admin-post-page">
    <section class="w-2/5 mx-auto my-5">
      <AdminPostForm isEdit :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script lang="ts">
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import Vue from 'vue'
import { Blog } from '../../../types/index'

export default Vue.extend({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(editedPost: Blog) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    },
  },
  computed: {
    loadedPost() {
      return this.$store.getters.getPost(this.$route.params.postId)
    },
  },
})
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
</style>
