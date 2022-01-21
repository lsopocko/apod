import { useEffect, useState } from "react";

const storageKey = "apod";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const getFavorites = (): void => {
    const storedFavorites = localStorage.getItem(storageKey);

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const add = (apod: any): void => {
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