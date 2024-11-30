<template>
  <div class="content" >
    <ul class="firstTag">
      <li :class="{'firstTag-item':true,'firstTag-item_active':firstTagActiveIndex === index}"
          @click="changeTab(index)"
          v-for="(item,index) in firstTagList"
          :key="item.id">
        <span class="firstTagName">{{item.tagName}}</span>

      </li>
    </ul>

<!--    <div class="secondTag">-->
      <ul class="secondTag">
        <li class="secondTag-item"
            v-for="(item,index) in tagList" :key=" item.id" >
          <span class="secondTagName" @click="toFoodBookInfo(item,firstTag)">
            {{item.tagName}}
          </span>
          <span class="iconfont icon-shuxian" v-show="showColLine(index)"></span>
        </li>
      </ul>
<!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import SearchService from "@/views/search/service";
const  {storeRefs} = SearchService
const {getFirstTagList,getSecondTagList,showColLine,changeTab,firstTagActiveIndex,toFoodBookInfo} = SearchService
const {firstTagList,tagList,firstTag} = storeRefs
getFirstTagList()
getSecondTagList()
//获取标签列表数据


</script>

<style lang="scss" scoped>
.content{
  display: flex;
  position: absolute;
  width: 100%;
  top: 1.02rem;
  left: 0rem;
  bottom: 0.85rem;
  gap: 0.1rem;
  .firstTag{
    width: 1.3rem;
    flex-basis: 1.3rem;
    overflow-y: auto;
    &-item{
      height: 0.78rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .firstTag-item_active{
      color: red;
      text-shadow: 0 0 0.03rem #2a2a2a;
      background-color: #F7F7F7;
      .firstTagName{
        border-left: 3px solid red;
        width: 100%;
        text-align: center;
      }
    }
  }
  .secondTag{
    display: grid;
    padding: 0 0.05rem 0 0.1rem;
    //grid-template-columns: 1.18rem 1.1rem 0.25rem;
    grid-template-columns: repeat(3, 1fr);
    //&-item{

      .secondTag-item{
        background-color: #fff;
        padding: 0.2rem 0;
        align-items: center;
        text-align: center;
        .secondTagName{
          flex: 1;
        }
      }
    //}
  }

}
</style>