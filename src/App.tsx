import { useEffect, useState } from 'react';

export default function App() {
  const [now, setNow] = useState(() => new Date());
  const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(now);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  }).format(now);

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Vite + React + TypeScript</p>
        <h1 className="title">Hello World!!!</h1>
        <p className="subtitle">A minimal starter app ready for local development.</p>
        <div className="clock-card" aria-live="polite">
          <p className="clock-label">Current Date</p>
          <p className="clock-date">{formattedDate}</p>
          <p className="clock-label">Current Time</p>
          <p className="clock-time">{formattedTime}</p>
          <p className="clock-zone">{timeZone}</p>
        </div>
      </section>
    </main>
  );
}
