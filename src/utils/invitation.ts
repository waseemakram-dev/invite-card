import { gardenWedding as wedding } from '../data/gardenWedding';

export function countdownAt(now: number, target: string = wedding.countdownTarget) {
  const seconds = Math.max(0, Math.floor((Date.parse(target) - now) / 1000));
  return { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60, complete: seconds === 0 };
}
export function mapsLink(venue: typeof wedding.venues[number]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue.title}, ${venue.address}, Pakistan`)}`;
}
const escapeCalendar = (value: string) => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
const utc = (value: string) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
function foldLine(line: string): string {
  const encoder = new TextEncoder();
  let result = '', current = '';
  for (const char of line) {
    if (encoder.encode(current + char).length > 75) { result += `${current}\r\n`; current = ' '; }
    current += char;
  }
  return result + current;
}
export function calendarText(now = new Date()) {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Attique and Umaira//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
  for (const event of wedding.events) {
    const venue = wedding.venues.find(v => v.id === event.venueId)!;
    lines.push('BEGIN:VEVENT', `UID:${event.id}-2026@attique-umaira.invitation`, `DTSTAMP:${utc(now.toISOString())}`, `DTSTART:${utc(event.start)}`, `SUMMARY:${escapeCalendar(`Attique & Umaira - ${event.name}`)}`, `LOCATION:${escapeCalendar(`${venue.title}, ${venue.address}, Pakistan`)}`, `DESCRIPTION:${escapeCalendar(event.times.map(t => `${t.label}: ${t.time} (Pakistan Standard Time)`).join('\n'))}`, 'END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.map(foldLine).join('\r\n') + '\r\n';
}
export function downloadCalendar() {
  const url = URL.createObjectURL(new Blob([calendarText()], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'attique-umaira-wedding.ics';
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
