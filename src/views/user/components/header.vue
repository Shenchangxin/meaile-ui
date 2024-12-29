<template>
  <div class="header">
    <div class="avatar-container">
      <img class="avatar" :src="user.avatarOssObj.fileUrl" @click="goToProfileEdit"  alt="avatar"/>
    </div>
    <div class="user-info">
      <div class="nickname">{{ user.nickname }}</div>
      <div class="username">{{ user.username }}</div>
    </div>
    <button class="edit-profile" @click="goToProfileEdit">编辑资料</button>
  </div>
</template>

<script  lang="ts" setup>
import UserService from "@/views/user/service";
const  {storeRefs} = UserService
const {user} = storeRefs
const {getUserInfo,goToProfileEdit} = UserService
getUserInfo();

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}

.avatar-container {
  margin-right: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
}

.user-info {
  flex: 1;
}

.nickname {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.username {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
}

.edit-profile {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>