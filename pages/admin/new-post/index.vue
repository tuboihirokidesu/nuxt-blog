<template lang="">
  <section class="w-2/5 mx-auto my-5">
    <AdminPostForm @submit="onSubmitted" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import { Blog } from '../../../types/index'

export default Vue.extend({
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData: Blog) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/')
      })
    },
  },
})
</script>
