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
      { dates: ["12/14", "12/21", "1/11", "1/25", "2/2", "2/8", "3/1", "3/8", "3/22"] },
      { times: [
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
  },
  {
    id: 'winter-intramural-training',
    title: "UST WINTER INTRAMURAL TRAINING",
    description: "Winter intramural training program for boys and girls born 2021-2017",
    type: "Training",
    status: "upcoming",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png",
    venue: "Christ Lutheran Church, 189 Burr Rd, East Northport, NY",
    startDate: "2024-12-14",
    endDate: "2024-03-22",
    ageGroups: ["2021-2017"],
    price: {
      amount: 175,
      currency: "USD"
    },
    schedule: [
      { dates: ["12/14", "12/21", "1/11", "1/25", "2/2", "2/8", "3/1", "3/8", "3/22"] },
      { times: [{ time: "10AM-11AM" }] }
    ],
    maxParticipants: 30,
    features: [
      "Age-appropriate training",
      "Fun learning environment",
      "Basic skill development",
      "Introduction to soccer fundamentals"
    ],
    registrationDeadline: "2024-12-13"
  },
  {
    id: 'fall-intense-clinic',
    title: "UST FALL INTENSE CLINIC",
    description: "Fall intensive training program for boys and girls born 2017-2008",
    type: "Clinic",
    status: "upcoming",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
    venue: "Christ Lutheran Church, 189 Burr Rd, East Northport, NY",
    startDate: "2024-09-21",
    endDate: "2024-11-16",
    ageGroups: ["2017-2013", "2012-2008"],
    price: {
      amount: 325,
      currency: "USD"
    },
    schedule: [
      { dates: ["9/21", "9/28", "10/19", "10/26", "11/2", "11/9", "11/16"] },
      { times: [
        { group: "2017-2013", time: "5:30PM-7PM" },
        { group: "2012-2008", time: "7PM-8:30PM" }
      ]}
    ],
    maxParticipants: 30,
    features: [
      "Professional coaching staff",
      "Technical training",
      "Tactical development",
      "Physical conditioning"
    ],
    registrationDeadline: "2024-09-20"
  },
  {
    id: 'fall-intramural-program',
    title: "UST FALL INTRAMURAL PROGRAM",
    description: "Fall intramural program for boys and girls born 2021-2016",
    type: "Training",
    status: "upcoming",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png",
    venue: "Christ Lutheran Church, 189 Burr Rd, East Northport, NY",
    startDate: "2024-09-12",
    endDate: "2024-11-07",
    ageGroups: ["2021-2019", "2018-2016"],
    price: {
      amount: 175,
      currency: "USD"
    },
    schedule: [
      { dates: ["9/12", "9/19", "9/26", "10/10", "10/17", "10/24", "11/7"] },
      { times: [
        { group: "2021-2019", time: "5PM-5:45PM" },
        { group: "2018-2016", time: "5pm-6pm" }
      ]}
    ],
    maxParticipants: 30,
    features: [
      "Age-appropriate training",
      "Fun learning environment",
      "Basic skill development",
      "Introduction to soccer fundamentals"
    ],
    registrationDeadline: "2024-09-11"
  }
];

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => Promise.resolve(EVENTS_DATA),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useSponsors() {
  return useQuery({
    queryKey: ['sponsors'],
    queryFn: () => fetchContent<Sponsor>('sponsors'),
    staleTime: 5 * 60 * 1000,
  });
}

export function useCampsClinics() {
  return useQuery({
    queryKey: ['camps-clinics'],
    queryFn: () => fetchContent<CampClinic>('camps-clinics'),
    staleTime: 5 * 60 * 1000,
  });
}

export function useTryouts() {
  return useQuery({
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

async function fetchContent<T>(collection: string): Promise<T[]> {
  const response = await fetch(`/api/content/${collection}`);
  if (!response.ok) throw new Error(`Failed to fetch ${collection}`);
  return response.json();
}