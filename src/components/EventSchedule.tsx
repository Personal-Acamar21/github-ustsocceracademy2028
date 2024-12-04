import React from 'react';
import { Calendar } from 'lucide-react';

interface ScheduleProps {
  schedule: {
    dates: string[];
    times: {
      group?: string;
      time: string;
    }[];
  }[];
}

export default function EventSchedule({ schedule }: ScheduleProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <Calendar className="h-5 w-5 text-[#00FF00] mr-2" />
        <h3 className="font-bold">Training Schedule</h3>
      </div>
      
      <div className="space-y-4">
        {/* Training Dates */}
        <div>
          <h4 className="font-semibold mb-2">Training Dates:</h4>
          <div className="flex flex-wrap gap-2">
            {schedule[0].dates.map((date, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {date}
              </span>
            ))}
          </div>
        </div>

        {/* Training Times */}
        <div>
          <h4 className="font-semibold mb-2">Training Times:</h4>
          <div className="space-y-2">
            {schedule[1].times.map((timeSlot, index) => (
              <div key={index} className="flex items-center">
                {timeSlot.group && (
                  <span className="font-medium mr-2">{timeSlot.group}:</span>
                )}
                <span>{timeSlot.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}