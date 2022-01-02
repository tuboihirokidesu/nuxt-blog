<template lang="">
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import firebase from 'firebase/compat/app'

interface Blog {
  author: string
  title: string
  thumbnailLink: string
  content: string
  previewText: string
}

export default Vue.extend({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData: Blog) {
      firebase
        .firestore()
        .collection('blog')
        .add({
          ...postData,
          updatedDate: new Date(),
        })
        .then((ref) => console.log(ref.id))
        .catch((e) => console.log(e))
    },
  },
})
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
