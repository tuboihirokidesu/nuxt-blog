<template lang="">
  <form @submit.prevent="onSave" class="text-white">
    <div class="flex justify-between mt-4 space-x-4">
      <AppControlInput class="w-1/2" v-model="editedPost.author"
        >Author Name</AppControlInput
      >
      <AppControlInput class="w-1/2" v-model="editedPost.title"
        >Title</AppControlInput
      >
    </div>
    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >
    <div class="flex justify-end">
      <CustomButton type="submit" class="mr-5 text-white bg-blue-700"
        >Save</CustomButton
      >
      <CustomButton
        type="button"
        btn-style="red"
        class="bg-red-700"
        @click="onCancel"
        >Cancel</CustomButton
      >
    </div>
  </form>
</template>

<script lang="ts">
import AppControlInput from '@/components/UI/AppControlInput.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import Vue from 'vue'
import useRoute from 'vue-router'

export default Vue.extend({
  components: {
    AppControlInput,
    CustomButton,
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
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/')
    },
  },
})
</script>
