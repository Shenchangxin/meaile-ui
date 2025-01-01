<template>
  <div class="content-area">
    <Tabs />
    <RecipeList />
  </div>
</template>

<script lang="ts" setup>
import Tabs from './tabs.vue';
import RecipeList from './recipeList.vue';



// export default defineComponent({
//   name: 'ContentArea',
//   components: {
//     Tabs,
//     RecipeList,
//   },
//   props: {
//     activeTab: {
//       type: String,
//       required: true,
//     },
//     recipes: {
//       type: Array as PropType<any[]>,
//       required: true,
//     },
//   },
//   methods: {
//     changeTab(tab: string) {
//       // 切换选项卡的逻辑
//     },
//   },
// });
</script>

<style scoped>
.content-area {
  flex: 1;
  padding: 20px;
}
</style>