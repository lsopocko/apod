import { useState } from 'react';

interface ApodResponse {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
  }

async function loadImage(src: string): Promise<null>{
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve(null)
      img.onerror = reject
      img.src = src
    })
  }

export default () => {
    const [response, setResponse] = useState<ApodResponse[]>();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const request = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=0s1xExjLXQxJ3QCjUwbQY3smuDjNHa6rm7bTqGL5&count=1');
            const data: ApodResponse[] = await response.json();
            await loadImage(data[0].url);

            setResponse(data);
        } catch (err: any) {
            setError(err.message || 'Unexpected Error!');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        response,
        error,
        isLoading,
        request
    };
};