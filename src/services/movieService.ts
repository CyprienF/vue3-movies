import { useFetch } from "@/composables/useFetch";
import type { Movie } from "@/models/movie";

const TMDB_API_KEY = "e05edc0fe3230ec7b579eccc88103db5";

export function getMovie(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`;

  const { data, error } = useFetch<Movie>(url);

  return { data, error };
}
