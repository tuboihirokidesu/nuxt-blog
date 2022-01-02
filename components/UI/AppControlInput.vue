<template lang="">
  <div class="input-control">
    <label class="inline-block mb-2 text-gray-700 form-label"><slot /></label>
    <input
      class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-md focus:shadow-outline"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      class="resize rounded-md form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
  <!--NOTE: $attrsは,classとstyleを含むコンポーネントに渡されるすべての属性が含まれるようになりました -->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>
