"use client";

import { useEffect, useState } from "react";
import { getActivities } from "../../lib/db";

export default function Home() {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  const getRecommendation = () => {
  const tips = [
    "🌱 Check soil moisture today",
    "💧 Water crops early in the morning",
    "🌿 Remove weeds around plants",
  ];

  const random = Math.floor(Math.random() * tips.length);
  return tips[random];
};

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌾 Hauwa Dashboard</h1>

<div className="bg-green-100 p-4 rounded mb-6">
  <h2 className="font-semibold text-green-800">
    Today’s Recommendation
  </h2>
  <p className="text-sm text-green-700 mt-1">
    {getRecommendation()}
  </p>
</div>
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
              className="p-4 rounded-xl bg-white shadow-sm border hover:shadow-md transition"
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