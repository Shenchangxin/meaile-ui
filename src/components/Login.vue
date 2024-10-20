<template>
    <h1>登录页面</h1>
    <el-button type="primary" @click="goHome">返回首页</el-button>
</template>
<script>
export default {
  name:'Login',
  mounted() {
    this.$request({
      method: 'post',
      url: '/api/user/login',
      data: {
        username: 'shencx',
        password: '123456'
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>
<style>
</style>
