import { useFetch } from "@/composables/useFetch";
import type { Movie } from "@/models/movie";

export function getMovie(id: string) {
  const url = `http://localhost:8080/movies/${id}`;

  const { data, error } = useFetch<Movie>(url);

  return { data, error };
}
