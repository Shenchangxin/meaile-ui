<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$storage.setItem('userInfo','shencx')
  }
}
</script>

<style>
</style>
