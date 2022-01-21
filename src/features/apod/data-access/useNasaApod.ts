import { useState } from "react";
import loadImage from "../../../util/loadImageAsync";
import API_KEY from "./apiKey";

interface ApodResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export const useNasaApod = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState<ApodResponse>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getPictureOfTheDay = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`);
      const data: ApodResponse[] = await response.json();
      // Ensure not only endpoint response in there but also image is downloaded so spinner will disapear when image is present, not just url
      await loadImage(data[0].url);

      setPictureOfTheDay(data[0]);
    } catch (err: any) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    pictureOfTheDay,
    error,
    isLoading,
    getPictureOfTheDay
  };
};