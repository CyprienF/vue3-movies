<template>
  <div class="movie-list">
    <div v-if="error">
      <MessageToast message="Un problème est survenu, merci de ressayer plus tard." />
    </div>

    <div v-else>
      <h1 class="title">Movies</h1>

      <div v-if="!isFetching" class="columns is-multiline">
        <div v-for="movie in data" :key="movie.id" class="column is-one-third">
          <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
            <MovieItem :movie="movie" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieItem from "@/components/movies/MovieItem.vue";
import MessageToast from "@/components/statics/MessageToast.vue";

import { getMovies } from "@/services/movieService";

const { isFetching, data, error } = getMovies();
</script>
