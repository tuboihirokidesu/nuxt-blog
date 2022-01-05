<template lang="">
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <CustomButton type="submit">{{
          isLogin ? 'Login' : 'Sign Up'
        }}</CustomButton>
        <CustomButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</CustomButton
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import AppControlInput from '@/components/UI/AppControlInput.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    CustomButton,
  },
  data() {
    return {
      isLogin: true,
    }
  },
})
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
