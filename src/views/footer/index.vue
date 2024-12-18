<template>
  <div class="footer">
    <div
      class="footer-item"
      :class="{ active: selectedIndex === 0 }"
      @click="selectIndex(0)"
    >
      <span class="shouye">首页</span>
    </div>
    <div
      class="footer-item"
      :class="{ active: selectedIndex === 1 }"
      @click="selectIndex(1)"
    >
      <span class="sousuo">搜索</span>
    </div>
    <div
      class="footer-item"
      :class="{ active: selectedIndex === 2 }"
      @click="selectIndex(2)"
    >
      <span class="pengyou">朋友</span>
    </div>
    <div
      class="footer-item"
      :class="{ active: selectedIndex === 3 }"
      @click="selectIndex(3)"
    >
      <span class="wode">我的</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import UserService from "@/views/user/service";
const {selectedIndex,selectIndex} = UserService
</script>
<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff; // 页脚背景颜色为白色
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
}

.footer-item {
  flex: 1;
  text-align: center;
  font-size: 0.2rem;
  font-weight: 300;
  cursor: pointer; // 添加鼠标指针样式以指示可点击
}

.footer-item span {
  color: #c2c2c2; // 默认字体颜色为灰色
}

.footer-item.active span {
  font-weight: 500;
  color: #000; // 选中状态的字体颜色为黑色
}
</style>