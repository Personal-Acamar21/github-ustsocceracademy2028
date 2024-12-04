import { useState, useEffect } from 'react';

export interface Event {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  maxParticipants: number;
  price: number;
  registrationLink: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export function useEvents() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<{ events: Event[] }>({ events: [] });

  useEffect(() => {
    fetch('/content/events')
      .then(response => response.json())
      .then(events => {
        setData({ events });
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}