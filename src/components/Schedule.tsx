import React from 'react';
import { Calendar } from 'lucide-react';

export default function Schedule() {
  const schedules = [
    { day: "Monday & Wednesday", time: "4:00 PM - 6:00 PM", group: "Youth Development" },
    { day: "Tuesday & Thursday", time: "4:00 PM - 6:30 PM", group: "Elite Training" },
    { day: "Friday", time: "5:00 PM - 7:30 PM", group: "College Prep" },
    { day: "Saturday", time: "9:00 AM - 12:00 PM", group: "All Levels" }
  ];

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Training Schedule</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {schedules.map((schedule, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <Calendar className="h-6 w-6 text-brand-green flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{schedule.day}</h3>
                <p className="text-gray-600">{schedule.time}</p>
                <p className="text-sm text-brand-green">{schedule.group}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}