<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img
          :src="`https://www.themoviedb.org/t/p/original/${props.movie.backgroundImage}`"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ props.movie.title }} <span class="title is-6">({{ props.movie.releaseDate }})</span></p>
          <p class="subtitle is-6">{{ props.movie.runtime }} minutes</p>
        </div>
      </div>

      <div class="content">{{ props.movie.overview }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "@/models/movie";

const props = defineProps<{
  movie: Movie
}>();
</script>
