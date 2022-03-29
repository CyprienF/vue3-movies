import { createRouter, createWebHistory } from 'vue-router';
import MovieList from '@/views/MovieList.vue';
import MovieDetails from '@/views/MovieDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/movie/:id',
      name: 'movie-details',
      component: MovieDetails
    },
    {
      path: '/movies',
      name: 'movie-list',
      component: MovieList
    }
  ]
});

export default router;
