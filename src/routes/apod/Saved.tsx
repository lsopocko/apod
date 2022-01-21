import { useEffect } from "react";
import { useFavorites } from "../../features/apod";
import { Gallery } from "../../features/gallery";

const Saved = () => {
  const { favorites, getFavorites } = useFavorites();

  useEffect(() => {
    getFavorites();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Gallery pictures={favorites}></Gallery>
  )
}

export default Saved;