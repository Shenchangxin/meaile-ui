<template>
  <div class="content">
    <div class="secondTags">
      <span class="secondTags-item">全部</span>
    </div>
    <div class="secondTags" v-for="(item,index) in getSecondTagList" :key="item.id">
      <span class="secondTags-item">{{ item.tagName }}</span>
    </div>
    <div class="icon">
        <span>
          <i class="iconfont icon-jiantoushang"></i>
        </span>
      <span>
          <i class="iconfont icon-jiantouxia"></i>
        </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchService from '@/views/search/service'

const {getSecondTagList} = SearchService.storeRefs

</script>
<style scoped lang="scss">
.content {
  margin-top: 0.3rem;
  width: 5.04rem;
  position: relative;
  .secondTags{
    float: left;
    font-size: 0.23rem;
    margin-right: 0.5rem;
    height: 0.48rem;
    &-item{
      text-shadow: 0 0 0.01rem gray;
      padding: 0.05rem 0.15rem;
    }
  }
  .icon{
    position: relative;
    right: 0.2rem;
    top: 0.5rem;
  }
  &::after{
    display: block;
    content: '';
    clear: both;
  }
}
</style>