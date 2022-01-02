<template lang="">
  <div>
    <section
      class="bg-local"
      :style="{ backgroundImage: 'assets/images/main-page-background.jpg' }"
    >
      <h1 class="m-3 text-5xl font-bold">Get the latest tech news!</h1>
      <PostList :posts="loadedPosts" />
    </section>
    <div>
      <Firebase />
    </div>
  </div>
</template>

<script lang="ts">
import PostList from '@/components/Posts/PostList.vue'
import Firebase from '@/components/Firebase.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    PostList,
    Firebase,
  },
  //NOTE: vuexからデータを取得
  //GettersをViewに依存させない
  //先ほどGettersの役割は、Componentにデータを加工して提供すると書きました。
  //しかし、表示用の加工処理をGettersに任せてしまうと、Storeの処理が肥大化し管理が難しくなります。
  //StoreからGettersで取得した値をComputedなどで処理をして表示するようにします
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
  created() {},
})
</script>

<style scoped>
section {
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
}
</style>
