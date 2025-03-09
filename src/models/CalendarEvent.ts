interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  location?: string;
  uid?: string;
  localizedStart: string;
  localizedEnd: string;
}
export default CalendarEvent;