<template>
  <div class="content" >
    <ul class="firstTag">
      <li :class="{'firstTag-item':true,'firstTag-item_active':firstTagActiveIndex === index}"
          @click="changeTab(index)"
          v-for="(item,index) in tagList"
          :key="item.id">
        <span class="firstTagName">{{item.tagName}}</span>

      </li>
    </ul>
    <div class="secondTag">
      <ul>
        <li class="secondTag-item"
            v-for="(item,index) in secondTagList" :key=" item.id" >
          <div class="secondTag-item">
            {{item.tagName}}
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import SearchService from "@/views/search/service";

const {getFirstTagList,getSecondTagList,changeTab,firstTagActiveIndex,tagList,secondTagList} = SearchService
getFirstTagList()
getSecondTagList()
//获取标签列表数据


</script>

<style lang="scss">
.content{
  display: flex;
  position: absolute;
  width: 100%;
  top: 1.02rem;
  left: 0rem;
  bottom: 0.85rem;
  background-color: aquamarine;
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
    background-color: green;
    flex: 1;
    margin-right: 0.19rem;
    &-item{
      background-color: #fff;
      .secondTag-item{
        height: 0.73rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.2rem;

      }
    }
  }

}
</style>