<script setup lang="ts">
import MovieItem from '@/components/movies/MovieItem.vue';

const movies: string[] = ["3"];

</script>

<template>
  <div class="columns is-multiline">
    <div v-for="movie in movies" :key="movie" class="column is-half">
      <MovieItem :id="movie" />
    </div>
  </div>
</template>