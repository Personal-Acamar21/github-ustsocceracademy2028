import React from 'react';
import ScheduleItem from './ScheduleItem';

const schedules = [
  { day: "Monday & Wednesday", time: "4:00 PM - 6:00 PM", group: "Youth Development" },
  { day: "Tuesday & Thursday", time: "4:00 PM - 6:30 PM", group: "Elite Training" },
  { day: "Friday", time: "5:00 PM - 7:30 PM", group: "College Prep" },
  { day: "Saturday", time: "9:00 AM - 12:00 PM", group: "All Levels" }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Training Schedule</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {schedules.map((schedule, index) => (
            <ScheduleItem
              key={index}
              day={schedule.day}
              time={schedule.time}
              group={schedule.group}
            />
          ))}
        </div>
      </div>
    </section>
  );
}