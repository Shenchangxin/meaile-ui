<template>
  <div class="content">
    <i class="iconfont icon-xiangzuojiantou" @click="back()"></i>
    <div class="tosearch">
      <div class="tosearch-keyword">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="土豆" class="tosearch-keyword-input"/>
        <span class="keyword">{{getSecondTag.tagName}}</span>
        <i class="iconfont icon-close"></i>
      </div>
    </div>
    <i class="iconfont icon-iosgengduo_o more"></i>
  </div>
</template>

<script setup lang="ts">
import SearchService from "@/views/search/service";
const {storeRefs,back} = SearchService

const {getSecondTag} = storeRefs



</script>

<style lang="scss" scoped>
@use "../../../assets/css/common";
.content{
  @extend .multiplex-content;
  .tosearch{
    @extend .multiplex-tosearch;
  }
}
</style>