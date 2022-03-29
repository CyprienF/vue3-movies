import { useFetch } from "@/composables/useFetch";
import type { Movie } from "@/models/movie";

const BASE_URL = 'http://localhost:8080';

export const getMovies = () => {
  const url = `${BASE_URL}/movies`;

  const { data, error } = useFetch<Movie[]>(url);

  return { data, error };
};

export const getMovie = (id: number) => {
  const url = `${BASE_URL}/movies/${id}`;

  const { data, error } = useFetch<Movie>(url);

  return { data, error };
};
