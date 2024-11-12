<template>
  <div class="content">
    <i class="iconfont icon-xiangzuojiantou"></i>
    <div class="tosearch">
      <div class="tosearch-keyword">
        <i class="iconfont icon-fangdajing"></i>
        <span class="keyword">土豆</span>
        <i class="iconfont icon-close"></i>
        <input type="text" placeholder="土豆" class="tosearch-keyword-input"/>
      </div>
    </div>
    <i class="iconfont icon-xiaoxi message"></i>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.content{
  @extend .multiplex-content;
  .tosearch{
    @extend .multiplex-tosearch;
  }
}
</style>