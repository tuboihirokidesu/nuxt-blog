<template lang="">
  <div class="admin-page">
    <section class="new-post">
      <CustomButton @click="$router.push('/admin/new-post')"
        >New Blog</CustomButton
      >
    </section>
    <section class="existing-posts">
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script lang="ts">
import PostList from '@/components/Posts/PostList.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import Vue from 'vue'

export default Vue.extend({
  layout: 'admin',
  components: {
    CustomButton,
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
})
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
