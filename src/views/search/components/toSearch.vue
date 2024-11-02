<template>
  <div class="content">
    <div class="to-search">
      <i class="iconfont icon-fangdajing"></i>
    </div>
    <div class="message"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content{
  display: flex;
  margin: 0.18rem;
  width: 5.04rem;
  background-color: antiquewhite;

  height: 0.85rem;
  align-items: center;
  .to-search{
    width: 4.32rem;
    height: 0.67rem;
    background-color: #f6f6f6;
    border-radius: 1rem;
  }
  .message{
    width: 0.70rem;
    height: 0.67rem;
    margin-left: 0.02rem;
  }
}
</style>