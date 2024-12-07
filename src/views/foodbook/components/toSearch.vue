<template>
  <div class="content">
    <i class="iconfont icon-xiangzuojiantou" @click="back()"></i>
    <div class="tosearch">
      <div class="tosearch-keyword">
        <i class="iconfont icon-fangdajing fangdajing"></i>
        <div class="tosearch-keyword">
          <input type="text" class="tosearch-keyword-input"/>
          <span class="keyword">{{getSecondTag.tagName}}</span>
          <i class="iconfont icon-close"></i>
        </div>
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
  z-index: 2;
  .tosearch{
    @extend .multiplex-tosearch;
    .fangdajing{
      fonts-size: 0.36rem;
      margin: 0rem 0.26rem;
    }
    &-keyword{
      display: grid;
      grid-template-columns: 3rem;
    }
  }
}
</style>