<template>
  <ul class="book-sort">
    <li class="compsive">综合</li>
    <li :class="{selected:sortField === 'collection'}" @click="sortBook('collection')">收藏量</li>
    <li :class="{selected:sortField === 'c'}" @click="sortBook('favorite')">
      评分
      <span class="ascdesc">
        <i v-show = "isAsc" class="iconfont icon-zuoce-xiangshangxiaojiantou"></i>
        <i v-show = "!isAsc" class="iconfont icon-zuoce-xiangxiaxiaojiantousvg"></i>
      </span>
    </li>
    <li class="shop">店铺</li>
    <li class="dressing">
      筛选
      <i class="iconfont icon-shaixuan"></i>
    </li>
  </ul>
</template>
<script setup lang="ts">
import BookService from '@/views/foodbook/service/index.ts'
const {sortBook,sortField,isAsc} = BookService
</script>

<style scoped lang="scss">
.book-sort{
  display: flex;
  height: 0.5rem;
  font-size: 0.2rem;
  width: 100%;
  margin-left: 0.1rem;
  >li{
    flex: 1;
    display: flex;
    align-items: center;
    &.selected{
      color: red;
    }
  }
}
</style>