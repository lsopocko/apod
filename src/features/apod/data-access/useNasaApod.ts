import { useState } from "react";
import loadImage from "../../../util/loadImageAsync";
import { ApodModel } from "../apod.model";
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

const mapApodResponse = ({ date, explanation, hdurl, title, url}: ApodResponse): ApodModel => {
  return {
    date,
    explanation,
    hdurl,
    url,
    title
  }
}

export const useNasaApod = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState<ApodModel>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getPictureOfTheDay = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`);
      const rawApods: ApodResponse[] = await response.json();
      const mappedApods = rawApods.map(mapApodResponse);

      // Ensure not only endpoint response in there but also image is downloaded so spinner will disapear when image is present, not just url
      await loadImage(mappedApods[0].url);

      setPictureOfTheDay(mappedApods[0]);
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