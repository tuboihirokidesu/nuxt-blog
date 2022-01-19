<template lang="">
  <div class="h-16">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="ml-10 font-mono text-2xl font-bold text-white">
        <nuxt-link to="/">Nuxt BLOG</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
      <CustomButton
        @click="$router.push('/admin/new-post')"
        class="mr-10 font-mono font-bold text-white"
        >New Blog</CustomButton
      >
    </header>
  </div>
</template>

<script lang="ts">
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
    CustomButton,
  },
})
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
  margin-right: 20px;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
