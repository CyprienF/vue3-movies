<script setup lang="ts">
import NavbarItem from '@/components/statics/NavbarItem.vue';
</script>

<template>
  <NavbarItem />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/main.scss";
</style>
