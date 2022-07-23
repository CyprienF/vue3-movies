<template>
  <div class="notification is-danger">{{ props.message }}</div>
</template>

<script setup lang="ts">

const props = defineProps<{
  message: string
}>();
</script>
