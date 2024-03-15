import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrencyInfo = (currency) => {
  const [conversionRates, setConversionRates] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrencyInfo = async () => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/c5b66f33b03de0c3dbbd69cf/latest/${currency}`);
      setConversionRates(response.data.conversion_rates);
    } catch (error) {
      console.error('Error fetching currency info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencyInfo();
  }, [currency]); // Re-run effect whenever currency changes

  // Return loading state while data is being fetched
  if (loading) {
    return 'Loading...';
  }

  // Return conversionRates once data is fetched
  return conversionRates;
};

export default useCurrencyInfo;
