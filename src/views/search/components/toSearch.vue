<template>
  <div class="content">
    <div class="to-search">
      <i class="iconfont icon-fangdajing"></i>
      <div class="tosearch-keyword">
        <input type="text" placeholder="土豆" class="tosearch-keyword-input"/>
        <i class="iconfont icon-iconfontscan"></i>
      </div>
    </div>
    <div class="message">
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.content{
  @extend .multiplex-content;
  .to-search{
    @extend .multiplex-tosearch;
    .icon-fangdajing{
      font-size: 0.32rem;
      margin: 0rem 0.2rem;
    }
    &-keyword{
      width: 3.5rem;
      height: 0.63rem;
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }
  .message{
    width: 0.70rem;
    height: 0.67rem;
    margin-left: 0.02rem;
  }
}
</style>