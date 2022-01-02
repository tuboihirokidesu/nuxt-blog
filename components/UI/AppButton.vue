<template lang="">
  <button
    class="px-4 py-2 font-semibold bg-transparent border rounded"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: '',
    },
  },
})
</script>
