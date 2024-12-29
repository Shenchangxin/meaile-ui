<template>
  <div class="tabs">
    <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: activeTab === tab }"
        @click="changeTab(tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Tabs',
  props: {
    activeTab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tabs: ['我发布的食谱', '我收藏的食谱'],
    };
  },
  methods: {
    changeTab(tab: string) {
      this.$emit('tab-change', tab);
    },
  },
});
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button.active {
  border-bottom: 2px solid #007bff;
}
</style>