import { useState, useEffect } from 'react';

export interface Coach {
  name: string;
  role: string;
  image: string;
  credentials: string;
  experience: string;
  bio: string;
  order: number;
}

export function useCoaches() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<{ coaches: Coach[] }>({ coaches: [] });

  useEffect(() => {
    fetch('/content/coaches')
      .then(response => response.json())
      .then(coaches => {
        setData({ coaches });
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}