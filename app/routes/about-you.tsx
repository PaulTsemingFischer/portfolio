import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

type LoaderData = {
  contacts: Contact[];
};

export const loader: LoaderFunction = async () => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return json<LoaderData>({ contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return json<LoaderData>({ contacts: [] });
  }
};

export const meta: MetaFunction = () => {
  return [
    { title: "About You - Paul Fischer" },
    { name: "description", content: "Learn about your browser and view contact messages." },
  ];
};

export default function About() {
  const { contacts } = useLoaderData<LoaderData>();
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">About You</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Browser Info Column */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Here's what I can tell about your browsing session and device information.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Browser Details</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {browserInfo.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Messages Column */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Contact Messages ({contacts.length})
              </h3>
              
              {contacts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                  No messages yet. Be the first to send one!
                </p>
              ) : (
                <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
                  {contacts.map((contact) => (
                    <div 
                      key={contact.id} 
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          {contact.name}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(contact.createdAt)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {contact.email}
                      </p>
                      
                      <p className="text-sm text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                        {contact.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}