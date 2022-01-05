<template lang="">
  <nuxt-link :to="postLink" class="overflow-hidden rounded shadow-lg w-80">
    <article>
      <div
        class="w-full bg-center bg-cover h-52"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold">{{ title }}</div>
        <p class="text-base text-gray-700 truncate">{{ content }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  //NOTE: pages/admin/index.vueにて<PostList isAdmin />をつけている。
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    },
  },
})
</script>

<style scoped>
.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
