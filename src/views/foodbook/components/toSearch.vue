<template>
  <div class="content">
    <i class="iconfont icon-xiangzuojiantou xiangzuojiantou" @click="back()"></i>
    <div class="tosearch">
      <div class="tosearch-keyword">
        <i class="iconfont icon-fangdajing fangdajing"></i>
        <div class="tosearch-keyword">
          <input type="text" v-model="secondTagName" class="tosearch-keyword-input" />
          <!--          <span class="keyword">{{getSecondTag.tagName}}</span>-->
          <i class="iconfont icon-close"></i>
        </div>
      </div>
    </div>
    <i class="iconfont icon-iosgengduo_o more"></i>
  </div>
</template>

<script setup lang="ts">
import SearchService from "@/views/search/service"
import { onMounted, ref } from "vue"

const { storeRefs, back } = SearchService

const { getSecondTag } = storeRefs
// 创建一个响应式引用来存储从 getSecondTag 函数获取的标签值
const secondTagName = ref<string>("")

// 在组件挂载时调用 getSecondTag 函数，并设置 tagName 的值
onMounted(() => {
  // 假设 getSecondTag 返回一个对象，该对象有一个 tagName 属性
  const secondTagData = getSecondTag
  console.log("secondTagData:" + secondTagData.value.tagName)
  if (secondTagData.value && secondTagData.value.tagName) {
    secondTagName.value = secondTagData.value.tagName
  }
})


</script>

<style lang="scss" scoped>
@use "../../../assets/css/common";

.content {
  @extend .multiplex-content;
  z-index: 2;

  .tosearch {
    @extend .multiplex-tosearch;
    .fangdajing {
      margin: 0 0.20rem;
    }
    &-keyword {
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      font-weight: 100;
      .tosearch-keyword-input{
        height: 0.24rem;
        background-color: transparent;
        border: none;
      }
    }
  }
}
</style>