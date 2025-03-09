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
        const f1JCalData = ICAL.parse(f1Data) as unknown[];
        const f1Comp = new ICAL.Component(f1JCalData)
        const f1Vevents = f1Comp.getAllSubcomponents("vevent");
        const now = new Date();
        const f1ParsedEvents: CalendarEvent[] = f1Vevents
          .filter(vevent => {
            const event = new ICAL.Event(vevent);
            return !event.summary.includes("Practice") && event.startDate.toJSDate() > now;
          })
          .map(vevent => {
            const event = new ICAL.Event(vevent);
            const startDate = event.startDate.toJSDate();
            const endDate = event.endDate.toJSDate();
            return {
              title: event.summary.substring(0, 2),
              start: startDate,
              end: endDate,
              location: event.location,
              uid: event.uid,
              localizedStart: startDate.toLocaleString("sv-se", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              }),
              localizedEnd: endDate.toLocaleTimeString("sv-se", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
          })
          .sort((a, b) => a.start.getTime() - b.start.getTime());
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