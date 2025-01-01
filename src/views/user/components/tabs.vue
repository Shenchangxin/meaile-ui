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

<script lang="ts" setup>
import UserService from "@/views/user/service";
const {getTabs,changeTab,storeRefs} = UserService
const{activeTab} = storeRefs
const tabs = getTabs()

</script>

<style lang="scss" scoped>
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