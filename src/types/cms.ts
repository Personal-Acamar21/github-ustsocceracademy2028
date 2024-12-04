export interface Event {
  id: string;
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  venue: string;
  description: string;
  type: 'Tournament' | 'Camp' | 'Clinic' | 'Training' | 'Tryout' | 'Special Event';
  ageGroups: string[];
  price: {
    amount: number;
    currency: string;
  };
  schedule: {
    dates: string[];
    times: {
      group?: string;
      time: string;
    }[];
  }[];
  features: string[];
  coaches?: {
    name: string;
    role: string;
    image: string;
    bio: string;
  }[];
  maxParticipants: number;
  registrationDeadline: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registeredCount?: number;
}

export interface Sponsor {
  title: string;
  logo: string;
  website: string;
  level: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Partner';
  description: string;
  active: boolean;
  order: number;
}

export interface CampClinic {
  title: string;
  image: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'Summer Camp' | 'Winter Camp' | 'Specialty Clinic' | 'Holiday Camp';
  ageGroups: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
  priceOptions: {
    name: string;
    amount: number;
    description: string;
  }[];
  features: string[];
  coaches: {
    name: string;
    role: string;
    credentials: string;
  }[];
  maxParticipants: number;
  earlyBirdDeadline?: string;
  registrationDeadline: string;
}

export interface Tryout {
  title: string;
  image: string;
  description: string;
  dates: {
    date: string;
    ageGroup: string;
    location: string;
  }[];
  requirements: string[];
  whatToBring: string[];
  evaluationCriteria: {
    category: string;
    description: string;
  }[];
  registrationFee: number;
  registrationDeadline: string;
  contact: {
    name: string;
    role: string;
    email: string;
    phone: string;
  };
  status: 'upcoming' | 'ongoing' | 'completed';
}
