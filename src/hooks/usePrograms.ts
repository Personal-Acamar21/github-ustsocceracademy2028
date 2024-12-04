import { useState, useEffect } from 'react';
import type { Program } from '../types';

export function usePrograms() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/content/programs');
        if (!response.ok) throw new Error('Failed to fetch programs');
        const programs = await response.json();
        setData(programs);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Error loading programs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return { loading, error, data };
}