<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form>
        <div class="title">来智能食谱平台，健康吃出来！</div>
        <el-form-item>
          <el-input type="text"/>
        </el-form-item>
        <el-form-item>
          <el-input type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name:'Login',
  mounted() {
    // this.$request({
    //   method: 'post',
    //   url: '/api/user/login',
    //   data: {
    //     username: 'shencx',
    //     password: '123456'
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })
  },
  methods:{

  }
}
</script>
<style lang="scss">
.login-wrapper{
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vw;
}
</style>
