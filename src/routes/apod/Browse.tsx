import { useCallback, useEffect } from "react";
import { useFavorites, useNasaApod, ApodBrowser } from "../../features/apod";
import { Alert } from "../../ui";

const Browse = () => {
  const { getPictureOfTheDay, isLoading, pictureOfTheDay, error } = useNasaApod();
  const { add } = useFavorites();

  let { url, title, explanation, date } = pictureOfTheDay || {};

  useEffect(() => {
    getPictureOfTheDay();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNextClick = useCallback(() => {
    getPictureOfTheDay();
  }, [getPictureOfTheDay]);

  const handleSaveClick = useCallback(() => {
    if (pictureOfTheDay) {
      add(pictureOfTheDay);
    }
  }, [pictureOfTheDay, add]);

  return (
    <>
      {error && <Alert title="Error" message="There was a problem when fetching APOD. Try again later." />}
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