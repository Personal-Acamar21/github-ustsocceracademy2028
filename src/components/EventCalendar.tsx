import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

interface EventCalendarProps {
  events: Event[];
  onEventClick?: (event: Event) => void;
}

export default function EventCalendar({ events, onEventClick }: EventCalendarProps) {
  return (
    <div className="h-[600px] bg-white p-4 rounded-lg shadow-lg">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={onEventClick}
        views={['month', 'week', 'day']}
        defaultView="month"
        className="text-sm"
      />
    </div>
  );
}