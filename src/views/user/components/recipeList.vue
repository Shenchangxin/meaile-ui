<template>
  <div class="recipe-list">
    <RecipeCard class="recipe-card" v-for="book in books" :key="book.id" :book="book"  />
  </div>
</template>

<script lang="ts" setup>
import UserService from "@/views/user/service";
import RecipeCard from './recipeCard.vue';
const {storeRefs} = UserService
const {books} = storeRefs

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