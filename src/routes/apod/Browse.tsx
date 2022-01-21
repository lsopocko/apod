import { useCallback, useEffect } from "react";
import { useFavorites, useNasaApod, ApodBrowser } from "../../features/apod";

const Browse = () => {
  const { getPictureOfTheDay, isLoading, pictureOfTheDay } = useNasaApod();
  const { add } = useFavorites();

  let { url, title, explanation, date } = pictureOfTheDay || {};

  useEffect(() => {
    getPictureOfTheDay();
  }, []);

  const handleNextClick = useCallback(() => {
    getPictureOfTheDay();
  }, [getPictureOfTheDay]);

  const handleSaveClick = useCallback(() => {
    add(pictureOfTheDay);
  }, [pictureOfTheDay, add]);

  return (
    <>
      <ApodBrowser 
        title={title} 
        url={url} 
        description={explanation} 
        date={date} 
        isLoading={isLoading} 
        onNext={handleNextClick} 
        onSave={handleSaveClick}
      ></ApodBrowser>
    </>
  )
}

export default Browse;