import { useEffect, useState } from 'react';

export default () => {
    const [favorites, setFavorites] = useState<any[]>([]);

    const getFavorites = (): void => {
        const storedFavorites = localStorage.getItem('apod');

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    };

    const add = (apod: any): void => {
        const updatedFavorites = [...favorites, apod];
        setFavorites(updatedFavorites);
        localStorage.setItem('apod', JSON.stringify(updatedFavorites));
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