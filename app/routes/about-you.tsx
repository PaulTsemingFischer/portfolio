import type { MetaFunction } from "@remix-run/node";

import { useState, useEffect } from 'react';

export default function About() {
  const [browserInfo, setBrowserInfo] = useState({
    facts: []
  });

  useEffect(() => {
    function getBrowserInfo() {
      const ua = navigator.userAgent;
      let browserName = "Unknown Browser";

      if (ua.includes("Chrome") && !ua.includes("Edg")) {
        browserName = "Chrome";
      } else if (ua.includes("Firefox")) {
        browserName = "Firefox";
      } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
        browserName = "Safari";
      } else if (ua.includes("Edg")) {
        browserName = "Microsoft Edge";
      }

      return browserName;
    }

    function updateInfo() {
      const browserName = getBrowserInfo();
      const screenRes = `${screen.width}×${screen.height}`;
      const viewport = `${window.innerWidth}×${window.innerHeight}`;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const language = navigator.language;
      const platform = navigator.platform;
      const cookiesEnabled = navigator.cookieEnabled;
      const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const dateTime = new Date().toLocaleString();
      setBrowserInfo({
        facts: [
          `📅 Date & Time: ${dateTime}`,
          `🌐 Browser: ${browserName}`,
          `📱 Screen: ${screenRes} (Viewport: ${viewport})`,
          `🌍 Location: ${timezone}`,
          `🗣️ Language: ${language}`,
          `💻 Platform: ${platform}`,
          `🎨 Theme: ${colorScheme} mode`,
          `🍪 Cookies: ${cookiesEnabled ? 'Enabled' : 'Disabled'}`,
        ]
      });
    }

    updateInfo();

    const handleResize = () => {
      updateInfo();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About You</h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              {browserInfo.description1}
            </p>
            <p className="text-gray-600 text-lg">
              {browserInfo.description2}
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Details</h3>
              <ul className="space-y-2 text-gray-600">
                {browserInfo.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              src="/images/about-photo.jpg"
              alt="About you"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}