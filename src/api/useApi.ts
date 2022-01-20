import { useState } from "react";

export default (apiFunc: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args: any) => {
    setIsLoading(true);
    try {
      const response = await apiFunc(...args);
      setResponse(response.data);
    } catch (err: any) {
      setError(err.message || "Unexpected Error!");
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