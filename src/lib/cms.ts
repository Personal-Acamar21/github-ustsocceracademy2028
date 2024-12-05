import { useQuery } from '@tanstack/react-query';
import type { Event, Sponsor, CampClinic, Tryout } from '../types/cms';

// Mock data for events
const EVENTS_DATA: Event[] = [
  {
    id: 'winter-intense-clinic',
    title: "UST WINTER INTENSE CLINIC",
    description: "Intensive winter training program for boys and girls born 2017-2008",
    type: "Clinic",
    status: "upcoming",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
    venue: "Christ Lutheran Church, 189 Burr Rd, East Northport, NY",
    startDate: "2024-12-14",
    endDate: "2024-03-22",
    ageGroups: ["2017-2013", "2012-2008"],
    price: {
      amount: 380,
      currency: "USD"
    },
    schedule: [
      { dates: ["12/14", "12/21", "1/11", "1/25", "2/2", "2/8", "3/1", "3/8", "3/22"], times: [] },
      { dates: [], times: [
        { group: "2017-2013", time: "5:30-7PM" },
        { group: "2012-2008", time: "7PM-8:30PM" }
      ]}
    ],
    maxParticipants: 30,
    features: [
      "Professional coaching staff",
      "Age-appropriate training sessions",
      "Technical skill development",
      "Tactical understanding",
      "Physical conditioning"
    ],
    registrationDeadline: "2024-12-13"
  }
];

export function useEvents() {
  return useQuery<Event[], Error>({
    queryKey: ['events'],
    queryFn: () => Promise.resolve(EVENTS_DATA),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

async function fetchContent<T>(collection: string): Promise<T[]> {
  const response = await fetch(`/api/content/${collection}`);
  if (!response.ok) throw new Error(`Failed to fetch ${collection}`);
  return response.json();
}

export function useSponsors() {
  return useQuery<Sponsor[], Error>({
    queryKey: ['sponsors'],
    queryFn: () => fetchContent<Sponsor>('sponsors'),
    staleTime: 5 * 60 * 1000,
  });
}

export function useCampsClinics() {
  return useQuery<CampClinic[], Error>({
    queryKey: ['camps-clinics'],
    queryFn: () => fetchContent<CampClinic>('camps-clinics'),
    staleTime: 5 * 60 * 1000,
  });
}

export function useTryouts() {
  return useQuery<Tryout[], Error>({
    queryKey: ['tryouts'],
    queryFn: () => fetchContent<Tryout>('tryouts'),
    staleTime: 5 * 60 * 1000,
  });
}

// Helper functions for filtering content
export function getUpcomingEvents(events: Event[]) {
  return events.filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export function getActiveSponsors(sponsors: Sponsor[]) {
  return sponsors.filter(sponsor => sponsor.active)
    .sort((a, b) => a.order - b.order);
}

export function getUpcomingTryouts(tryouts: Tryout[]) {
  return tryouts.filter(tryout => tryout.status === 'upcoming')
    .sort((a, b) => new Date(a.dates[0].date).getTime() - new Date(b.dates[0].date).getTime());
}
