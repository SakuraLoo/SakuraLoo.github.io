<template>
  <section>

    <router-link
      class="menu-item"
      v-for="(item,index) in tabbarList" :key="index"
      :class="index==active ? 'active' : ''"
      :to="item.path"
    >
      <img class="menu-item-icon" :src="index==active ? item.iconActive : item.icon"/>
      <p> {{ item.name }} </p>
    </router-link>

  </section>
</template>

<script>
export default {
  name: "menuComponent",
  props: {
    active: Number
  },
  data() {
    return {
      hoverIndex: 0,
      activeLinkId: 1,
      tabbarList:[
        { name:"时间轴", path:"/time", icon:require("../assets/icon/time.png"), iconActive:require("../assets/icon/time_active.png") },
        { name:"首页", path:"/home", icon:require("../assets/icon/home.png"), iconActive:require("../assets/icon/home_active.png") },
        { name:"收藏", path:"/hobby", icon:require("../assets/icon/hobby.png"), iconActive:require("../assets/icon/hobby_active.png") }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.menu {
  box-shadow:rgba(0, 0, 0, 0.144) 0 0 10px;
  padding: 0 25px;
  width: calc(100% - 50px);

  &-item {
    position: relative;
    float: left;
    width: calc(100%/3);
    height: 100%;
    z-index: 0;

    &-icon {
      all: unset;
      box-sizing: inherit;
      display: block;
      position: relative;
      margin: 10px auto 3px auto;
      width: 22px;
      height: 22px;
    }
    p {
      height: 20px;
      line-height: 20px;
      color: #444;
      text-align: center;
      font-size: 12px;
    }
    .active &-icon {
      width: 35px;
      height: 35px;
      margin-top: -12px;
    }
  }
  &-item:before {
    content: "";
    position: absolute;
    top: -20px;
    left: calc(50% - 35px);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    z-index: -1;
  }
  &-item.active:before {
    background-color: #ffe300;
  }
  
}
</style>