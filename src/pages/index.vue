<template>
  <div>
    
    <section class="window">
      <!-- 登录页面 -->
      <login v-if="show" loginShow="show" @childParam="GetChild()"></login>
      <!-- 主要页面 -->
      <home v-if="!show"></home>
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
      show: false
    }
  },
  methods: {
    // 接收子组件传过来的值
    GetChild(params) {
      this.show = params;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>
