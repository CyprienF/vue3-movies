<script setup lang="ts">

interface Props {
  message: string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="notification is-danger">{{ props.message }}</div>
</template>
