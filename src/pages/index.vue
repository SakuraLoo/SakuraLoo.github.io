<template>
  <div>
    
    <section class="window">
      <!-- 登录页面 -->
      <login v-if="loginShow"></login>
      <!-- 主要页面 -->
      <home v-if="!loginShow"></home>
    </section>

  </div>
</template>

<script>
import login from './login'
import home from './home'

export default {
  name: "index",
  components: {
    login,home
  },
  data() {
    return {
      loginShow: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>
