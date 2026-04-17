"use client";

import { useEffect, useState } from "react";
import { getActivities } from "@/lib/db";

export default function Home() {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌾 Hauwa Dashboard</h1>

      <div className="mb-6">
        <a
          href="/add"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Activity
        </a>
      </div>

      <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>

      {activities.length === 0 ? (
        <p className="text-gray-500">No activities yet.</p>
      ) : (
        <ul className="space-y-2">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="border p-3 rounded bg-gray-50"
            >
              <p className="font-medium">{activity.type}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}