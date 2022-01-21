import { useEffect, useState } from "react";
import { ApodModel } from "../apod.model";

const storageKey = "apod";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<ApodModel[]>([]);

  const getFavorites = (): void => {
    const storedFavorites = localStorage.getItem(storageKey);

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const add = (apod: ApodModel): void => {
    const updatedFavorites = [...favorites, apod];
    setFavorites(updatedFavorites);
    localStorage.setItem(storageKey, JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    getFavorites();
  }, [])

  return {
    favorites,
    add,
    getFavorites
  };
};