<template>
  <div><to-search/></div>
  <div class="adv">
    <img class="adv-img" :src="ImgUtil.getImg('222.svg')"/>
  </div>
  <div class="bookTags">
    <breadcrumbs />
    <secondTag/>
    <booksort/>
    <bookitem/>
  </div>
  <div><Footer /></div>
</template>
<script setup lang="ts">
import toSearch from './components/toSearch.vue'
import breadcrumbs from './components/breadcrumbs.vue'
import secondTag from './components/secondTag.vue'
import bookitem from './components/bookitem.vue'
import booksort from './components/booksort.vue'
import Footer from '@/views/footer/index.vue'
import {ImgUtil} from '@/utils/imgUtil'
</script>

<style lang="scss" scoped>
.adv{
  position: absolute;
  top: 0.86rem;
  margin: 0.18rem;
  width: 5.04rem;
  height: 1.62rem;
  &-img{
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
  }
}
.bookTags{
  position: absolute;
  top: 2.7rem;
  width: 5.04rem;
  margin: 0.18rem;
  padding-bottom: 0.5rem;
}
</style>