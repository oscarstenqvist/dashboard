import { useEffect, useState } from "react";
import CalendarEvent from "../models/CalendarEvent";
import ICAL from "ical.js";

const useCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const f1Url = 'ecal-sub/67cd7aae16faa30008c9eb23/Formula%201.ics';
        const f1Response = await (fetch(f1Url));
        const f1Data = await f1Response.text();
        const f1JCalData = ICAL.parse(f1Data) as string;
        const f1Comp = new ICAL.Component(f1JCalData)
        const f1Vevents = f1Comp.getAllSubcomponents("vevent");
        const f1ParsedEvents: CalendarEvent[] = f1Vevents.map(vevent => {
          const event = new ICAL.Event(vevent);
          return {
            title: event.summary,
            start: event.startDate.toJSDate(),
            end: event.endDate.toJSDate(),
            description: event.description,
            location: event.location,
            uid: event.uid,
          };
        });
        setEvents(f1ParsedEvents);
      }
      catch (error) {
        console.error("Error fetching or parsing calendar data:", error);
      }
    }
    void fetchCalendarData();
  }, []);

  return { events }
}
export default useCalendar;