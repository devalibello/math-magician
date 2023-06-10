import { React, useEffect, useState } from 'react';
import './Api.css';

const Quote = () => {
  const [presentQuote, setPresentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const apiUrl = 'https://api.api-ninjas.com/v1/historicalevents?text=calculator';
  const apiKey = 'VhwDT8PUb1TelEYSw2oOkQ==tKwm5PstdfPXayhc';
  const option = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey },
    contentType: 'application/json',
  };

  useEffect(() => {
    fetch(apiUrl, option)
      .then((response) => response.json())
      .then((responseData) => {
        setPresentQuote(responseData[0].event);
        setIsLoading(false);
        setLoadError(null);
      }).catch((error) => {
        setLoadError(error.message);
        setIsLoading(false);
      });
  });

  return (
    <div className="api-quote">
      { loadError && <p>{loadError}</p>}
      { isLoading && <p>Quote Loading...</p>}
      { !isLoading && <p className="quote">{presentQuote}</p>}
    </div>
  );
};

export default Quote;
