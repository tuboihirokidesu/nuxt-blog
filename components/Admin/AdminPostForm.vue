<template lang="">
  <form @submit.prevent="onSave" class="text-white">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.previewText"
      >Preview Text</AppControlInput
    >
    <div class="flex justify-between">
      <AppButton
        type="submit"
        style="color: rgba(255, 255, 255); background-color: rgba(37, 99, 235)"
        >Save</AppButton
      >
      <AppButton
        type="button"
        btn-style="red"
        style="color: rgba(255, 255, 255); background-color: rgba(185, 28, 28)"
        @click="onCancel"
        >Cancel</AppButton
      >
    </div>
  </form>
</template>

<script lang="ts">
import AppControlInput from '@/components/UI/AppControlInput.vue'
import AppButton from '@/components/UI/AppButton.vue'
import Vue from 'vue'
import useRoute from 'vue-router'

export default Vue.extend({
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
          },
    }
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editedPost)
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    },
  },
})
</script>
