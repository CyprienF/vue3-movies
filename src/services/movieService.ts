import { useFetch } from "@/composables/useFetch";
import type { Movie } from "@/models/movie";

export function getMovies() {
  const url = 'http://localhost:8080/movies';

  const { data, error } = useFetch<Movie[]>(url);

  return { data, error };
}
