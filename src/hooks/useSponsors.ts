import { useState, useEffect } from 'react';

export interface Sponsor {
  title: string;
  logo: string;
  website: string;
  role: string;
  active: boolean;
  order: number;
}

export function useSponsors() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<{ sponsors: Sponsor[] }>({ sponsors: [] });

  useEffect(() => {
    fetch('/content/sponsors')
      .then(response => response.json())
      .then(sponsors => {
        setData({ sponsors });
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}