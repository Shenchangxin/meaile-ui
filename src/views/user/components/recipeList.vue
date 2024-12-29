<template>
  <div class="recipe-list">
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RecipeCard from './recipeCard.vue';

export default defineComponent({
  name: 'RecipeList',
  components: {
    RecipeCard,
  },
  props: {
    recipes: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recipe-card {
  width: calc(50% - 10px);
  margin-bottom: 20px;
}
</style>