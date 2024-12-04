import React from 'react';
import { Calendar } from 'lucide-react';

interface ScheduleItemProps {
  day: string;
  time: string;
  group: string;
}

export default function ScheduleItem({ day, time, group }: ScheduleItemProps) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
      <Calendar className="h-6 w-6 text-brand-green flex-shrink-0" aria-hidden="true" />
      <div>
        <h3 className="font-semibold">{day}</h3>
        <p className="text-gray-600">{time}</p>
        <p className="text-sm text-brand-green">{group}</p>
      </div>
    </div>
  );
}