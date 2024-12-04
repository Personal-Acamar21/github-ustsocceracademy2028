import { useState, useEffect } from 'react';
import type { Program, Coach, Event, Sponsor } from '../types';

export function usePrograms() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Program[]>([]);

  useEffect(() => {
    fetch('/content/programs')
      .then(response => response.json())
      .then(programs => {
        setData(programs);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}

export function useCoaches() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Coach[]>([]);

  useEffect(() => {
    fetch('/content/coaches')
      .then(response => response.json())
      .then(coaches => {
        setData(coaches);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}

export function useEvents() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/content/events')
      .then(response => response.json())
      .then(events => {
        setData(events);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}

export function useSponsors() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetch('/content/sponsors')
      .then(response => response.json())
      .then(sponsors => {
        setData(sponsors);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
}

export function useActiveSponsors() {
  const { data: sponsors, ...rest } = useSponsors();
  const activeSponsors = sponsors?.filter(sponsor => sponsor.active) || [];
  return { ...rest, data: activeSponsors };
}