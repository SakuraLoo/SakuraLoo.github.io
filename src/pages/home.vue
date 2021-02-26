<template>
  <section>
    
    <!-- 菜单栏 -->
    <header-component class="header">header</header-component>
    <section class="home_container">
      <section class="home_contain">

        homePage

      </section>
    </section>
    <!-- 导航条 -->
    <menu-component class="menu" :active="active"></menu-component>

  </section>
</template>

<script>
import headerComponent from '../components/header'
import menuComponent from '../components/menu'

export default {
  name: "home",
  components: {
    headerComponent,menuComponent
  },
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>