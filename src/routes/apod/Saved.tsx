import { useEffect } from "react";
import useFavorites from "../../features/apod/data-access/useFavorites"
import Gallery from "../../features/gallery/feature/Gallery";

export default function() {
    const { favorites, getFavorites } = useFavorites();

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <Gallery pictures={favorites}></Gallery>
    )
}