export interface Program {
  title: string;
  description: string;
  icon: string;
  ageRange: string;
  features: string[];
  order: number;
}

export interface Coach {
  name: string;
  role: string;
  image: string;
  credentials: string;
  experience: string;
  bio: string;
  order: number;
}

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

export interface Sponsor {
  title: string;
  logo: string;
  website: string;
  role: string;
  active: boolean;
  order: number;
}