import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://newletter.mgihq.com.ng/api/v1/${requestConfig.url}`, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      let responseData = await response.json();
      if (responseData.message === "An Error occured") {
        throw new Error(responseData.message);
      }
      applyData(responseData);
    } catch (err) {
      if (err.message === "Failed to fetch") {
        setError("Network error! Please check your internet connection.");
      } else {
        setError(err.message || "Something went wrong!");
      }
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
