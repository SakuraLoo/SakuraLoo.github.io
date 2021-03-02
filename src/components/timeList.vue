<template>

  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top" v-for="(item,index) in timeList" :key="index">
      <el-card>
        <h4> {{ item.title }} </h4>
        <p> {{ item.detail }} </p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
    
</template>

<script>
export default {
  name: "time",
  data() {
    return {
      List: []
    }
  },
  mounted () {
    this.GetAjax();
  },
   methods: {
     GetAjax () {
       this.$axios.get('/static/json/time.json').then(this.AjaxSuccess);
     },
     AjaxSuccess (res) {
       this.List= res.data.data;
       console.log(this.List)
     }
   }
}
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
</style>