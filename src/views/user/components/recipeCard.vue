<template>
  <div class="recipe-card">
    <img :src="recipe.cover" alt="recipe cover" class="cover" />
    <div class="info">
      <div class="title">{{ recipe.title }}</div>
      <div class="description">{{ recipe.description }}</div>
      <div class="likes">{{ recipe.likes }}赞</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.recipe-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cover {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.info {
  padding: 10px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.description {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.likes {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
</style>