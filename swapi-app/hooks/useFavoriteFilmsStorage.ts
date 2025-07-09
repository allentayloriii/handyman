import { FAVORITES_KEY } from "@/constants/storage-keys";
import useAsyncStorage from "@/hooks/useAsyncStorage";
import { Film } from "@/types/interfaces";

export function useFavoriteFilms() {
  const { value: favorites, setData } = useAsyncStorage<Film[]>(FAVORITES_KEY);

  return [
    favorites,
    setData,
  ] as const;
}
