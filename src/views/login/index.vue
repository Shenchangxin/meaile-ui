<template>
  <div class="login-container">
    <div class="login-form">
      <i class="iconfont icon-yonghu"></i>
      <el-input type="text" clearable @input="forceUpdate" class="username" v-model="loginForm.username" placeholder="用户名" />
      <i class="iconfont icon-mima"></i>
      <el-input type="password" clearable @input="forceUpdate" class="password"  v-model="loginForm.password" placeholder="密码" />
      <el-button @click="login" type="primary" class="login-button">登  录</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LoginForm } from "@/store"
const loginForm: LoginForm = {
  username: "",
  password: ""
}
import UserService from "@/views/user/service"
function login(){
  UserService.login(loginForm)
}
function forceUpdate(){
  this.$forceUpdate();
}
</script>
<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  height: 1.8rem;
  padding: 0.19rem;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.15rem;
  background-color: #fff;
}

.username::v-deep {
  height: 0.3rem;
  width: calc(100% - 0.3rem);
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
}
.password::v-deep {
  height: 0.3rem;
  width: calc(100% - 0.3rem);
  margin-bottom: 0.2rem;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
}

.login-button {
  width: calc(100% - 0.5rem);
  padding: 10px;
  border-radius: 0.1rem; // 为按钮添加圆角边框
  margin-top: auto;
}
</style>