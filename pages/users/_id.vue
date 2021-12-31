<template lang="">
  <div>
    <h1>{{ $route.params.id }}</h1>
    <nuxt-link to="/"> Home </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
