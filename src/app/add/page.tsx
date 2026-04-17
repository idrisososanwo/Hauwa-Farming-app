"use client";

import { useState } from "react";
import { addActivity } from "@/lib/db";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const [type, setType] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addActivity({
      type,
      date: new Date().toLocaleDateString(),
    });

    router.push("/");
  };

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Add Activity</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="e.g. Planting maize"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </main>
  );
}