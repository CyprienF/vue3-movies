<script setup lang="ts">
import { getMovie } from "@/services/movieService";

interface Props {
  id: string
}

const props = defineProps<Props>();

const { data, error } = getMovie(props.id);
</script>

<template>
  <div v-if="error">Error</div>

  <div v-if="data">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="`https://www.themoviedb.org/t/p/original/${data.backgroundImage}`"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ data.title }}</p>
            <p class="subtitle is-6">{{ data.runtime }} minutes</p>
          </div>
        </div>

        <div class="content">{{ data.overview }}</div>
      </div>
    </div>
  </div>
</template>