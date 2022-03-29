<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MessageToast from '@/components/statics/MessageToast.vue';

import { getMovie } from '@/services/movieService';

const route = useRoute();
const id = computed(() => route.params.id);

const { data, error } = getMovie(+id.value);

</script>

<template>
  <div class="movie-list">
    <div v-if="error">
      <MessageToast message="Un problème est survenu, merci de ressayer plus tard." />
    </div>

    <div v-if="data">
      <h1 class="title">{{ data.title }}</h1>
    </div>
  </div>
</template>