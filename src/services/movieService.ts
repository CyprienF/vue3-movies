import { useFetch } from '@vueuse/core';
import type { Movie } from "@/models/movie";

const BASE_URL = 'http://localhost:8080';

export const getMovies = () => {
  const url = `${BASE_URL}/movies`;

  const { isFetching, data, error } = useFetch<Movie[]>(url).get().json();

  return { isFetching, data, error };
};

export const getMovie = (id: number) => {
  const url = `${BASE_URL}/movies/${id}`;

  const { isFetching, data, error } = useFetch<Movie>(url).get().json();

  return { isFetching, data, error };
};
