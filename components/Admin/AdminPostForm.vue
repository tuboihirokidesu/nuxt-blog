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
    <div :class="[isEdit ? 'flex justify-between' : '']">
      <CustomButton
        v-if="isEdit"
        type="button"
        @click="isOpen = true"
        class="bg-red-700"
        >Delete</CustomButton
      >
      <div :class="[isEdit ? '' : 'flex justify-end']">
        <CustomButton type="submit" class="mr-5 text-white bg-blue-700"
          >Save</CustomButton
        >
        <CustomButton
          type="button"
          btn-style="red"
          class="bg-gray-600"
          @click="onCancel"
          >Cancel</CustomButton
        >
      </div>
    </div>
    <div
      v-show="isOpen"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div class="p-10 bg-white rounded-md shadow-xl ">
        <div class="mt-4">
          <p class="mb-4 text-lg text-center text-black">
            削除しますか？
          </p>
          <div class="flex justify-between gap-x-10">
            <button
              @click="onDelete"
              class="px-5 py-2 text-blue-100 bg-blue-600 rounded"
            >
              Yes
            </button>
            <button
              @click="isOpen = false"
              class="px-5 py-2 text-blue-800 border border-blue-600 rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import AppControlInput from '@/components/UI/AppControlInput.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import Vue from 'vue'

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
    isEdit: {
      type: Boolean,
      default: false,
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
      isOpen: false,
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
    onDelete() {
      this.$store.dispatch('deletePost', this.post).then(() => {
        this.$router.push('/admin')
      })
    },
  },
})
</script>
