<template>
  <div>
    <input type="text" v-model="loginForm.username" placeholder="Username" />
    <input type="password" v-model="loginForm.password" placeholder="Password" />
    <button @click="login">Login</button>
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
</script>
<style scoped lang="scss">

</style>