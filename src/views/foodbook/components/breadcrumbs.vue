<template>
  <div class="breadcrumbs">
    <div class="first-tag">{{getFirstTag.tagName}}</div>
    <i class="iconfont iconfont-xiangyoujiantou"/>
    <div class="second-tag">{{getSecondTag.tagName}}</div>
  </div>

</template>

<script lang="ts" setup>
import SearchService from "@/views/search/service"
const {getFirstTag,getSecondTag} = SearchService.storeRefs
</script>

<style lang="scss">
.breadcrumbs{
  display: flex;
  align-items: center;
  font-size: 0.23rem;
  padding: 0.12rem 0rem;
  gap: 0.1rem;
  font-weight: bold;
  .firstTag,.secondTag{
    text-shadow: 0rem 0rem 0.01rem black;
  }

}
</style>