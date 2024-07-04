<script setup>
import HeaderVue from "./components/HeaderVue.vue";
</script>

<template>
  <div id="app" class="app">
    <HeaderVue />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  max-width: 100vw;
}
</style>
