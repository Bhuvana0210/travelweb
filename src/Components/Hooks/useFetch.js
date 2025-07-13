// src/hooks/useFetch.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    axios.get(url)
      .then(res => {
        if (isMounted) {
          setData(res.data);
          setError(null);
        }
      })
      .catch(err => {
        if (isMounted) setError('Failed to fetch data');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
