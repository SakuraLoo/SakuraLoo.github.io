<template>
  <section>
    
    <!-- 菜单栏 -->
    <section class="home_container">
      <section class="home_contain">

        <time-swiper class="time_swiper"></time-swiper>

      </section>
    </section>
    <!-- 导航条 -->
    <menu-component class="menu" :active="active"></menu-component>

  </section>
</template>

<script>
import timeSwiper from '../components/timeSwiper'
import menuComponent from '../components/menu'

export default {
  name: "time",
  components: {
    timeSwiper,menuComponent
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.time_swiper {
  height: 120px;
}
</style>