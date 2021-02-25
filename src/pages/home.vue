<template>
  <section>
    
    <!-- 菜单栏 -->
    <header-component class="header">menu</header-component>
    <section class="home_container">
      <section class="home_contain">
        <!-- 天数 -->
        <date-page class="date" loginShow="show" @childParam2="GetChild2()" v-if="show"></date-page>
        <!-- 时间轴 -->
        <time-page class="time"></time-page>
        <!-- 安利 -->
        <hobby-page class="hobby"></hobby-page>
      </section>
    </section>
    <!-- 导航条 -->
    <menu-component class="menu"></menu-component>

  </section>
</template>

<script>
import headerComponent from '../components/header'
import datePage from './date'
import timePage from './time'
import hobbyPage from './hobby'
import menuComponent from '../components/menu'

export default {
  name: "home",
  components: {
    headerComponent,menuComponent,
    datePage,timePage,hobbyPage
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    // 接收子组件传过来的值
    GetChild2(params) {
      console.log(params)
      this.show = params;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

@media screen {
  .home_container {
    height: calc(100% - #{$header_height} - #{$menu_height});
    overflow: hidden;
  }
}

.home_contain {
  overflow: auto;
}

.header {
  height: $header_height;
}
.menu {
  height: $menu_height;
  background-color: #fff;
}
</style>