<template>
    <h1>登录页面</h1>
    <el-button type="primary" @click="goHome">返回首页</el-button>
</template>
<script>
export default {
  name:'Login',
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>
<style>
</style>
