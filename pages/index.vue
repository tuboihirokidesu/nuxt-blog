<template lang="">
  <div>
    <section
      :style="{ backgroundImage: 'assets/images/main-page-background.jpg' }"
    >
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>

<script lang="ts">
import PostList from '@/components/Posts/PostList.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
})
</script>
