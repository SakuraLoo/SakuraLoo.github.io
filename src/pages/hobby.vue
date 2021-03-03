<template>
  <section>
    
    <!-- 菜单栏 -->
    <section class="home_container">
      <section class="home_contain">

        hobbyPage

      </section>
    </section>
    <!-- 导航条 -->
    <menu-component class="menu" :active="active"></menu-component>

  </section>
</template>

<script>
import menuComponent from '../components/menu'

export default {
  name: "hobby",
  components: {
    menuComponent
  },
  data() {
    return {
      active: 2
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>