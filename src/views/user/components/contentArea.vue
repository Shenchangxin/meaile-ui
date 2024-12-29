<template>
  <div class="content-area">
    <Tabs :activeTab="activeTab" @tab-change="changeTab" />
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Tabs from './tabs.vue';
import RecipeList from './recipeList.vue';

export default defineComponent({
  name: 'ContentArea',
  components: {
    Tabs,
    RecipeList,
  },
  props: {
    activeTab: {
      type: String,
      required: true,
    },
    recipes: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  methods: {
    changeTab(tab: string) {
      // 切换选项卡的逻辑
    },
  },
});
</script>

<style scoped>
.content-area {
  flex: 1;
  padding: 20px;
}
</style>