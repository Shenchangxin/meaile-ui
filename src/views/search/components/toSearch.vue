<template>
  <div class="content">
    <div class="to-search">
      <i class="iconfont icon-fangdajing"></i>
      <div class="to-search-keyword">
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
@use "@/assets/css/common";
.content{
  @extend .multiplex-content;
  .to-search{
    @extend .multiplex-tosearch;
    .icon-fangdajing{
      font-size: 0.32rem;
      margin: 0 0.2rem;
    }
    &-keyword{
      width: 3.5rem;
      height: 0.63rem;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      .tosearch-keyword-input{
        height: 0.3rem;
        width: 2.8rem;
        padding-left: 0.09rem;
        border-radius: 0.15rem;
        font-size: 0.22rem;
      }
    }
  }
  .message{
    width: 0.70rem;
    height: 0.67rem;
    margin-left: 0.02rem;
  }
}
</style>