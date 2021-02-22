<template>
  <section>
    
    <!-- 导航条 -->
    <header-component class="header">header</header-component>
    <section class="home_container">
      <!-- 菜单栏 -->
      <menu-component class="menu">menu</menu-component>
      <!-- 天数 -->
      <date-page class="photo">photo</date-page>
      <!-- 时间轴 -->
      <!-- <time-page class="time">time</time-page> -->
      <!-- 安利 -->
      <!-- <hobby-page class="hobby">hobby</hobby-page> -->
    </section>

  </section>
</template>

<script>
import headerComponent from '../components/header'
import menuComponent from '../components/menu'
import datePage from './date'
import timePage from './time'
import hobbyPage from './hobby'

export default {
  name: "home",
  components: {
    headerComponent,menuComponent,
    datePage,timePage,hobbyPage
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

@media screen {
  .home_container {
    height: calc(100% - #{$header_height} - #{$menu_height});
  }
}

.header {
  height: $header_height;
}
.menu {
  height: $menu_height;
}
</style>