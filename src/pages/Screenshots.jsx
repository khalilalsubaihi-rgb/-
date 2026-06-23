import React from 'react';

export default function ScreenshotsPage() {
  const screenshots = [
    {
      id: 1,
      title: "Dashboard Overview",
      description: "Get a comprehensive view of your application's performance metrics and key indicators.",
    },
    {
      id: 2,
      title: "Analytics",
      description: "Detailed analytics and reporting.",
    }
  ];

  return (
    <div data-testid="screenshots-page">
      <h1>Screenshots</h1>
      <div data-testid="screenshots-list">
        {screenshots.map((s) => (
          <div key={s.id} data-testid="screenshot-item">
            <h2>{s.title}</h2>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}