import { advisoryTips } from "../../data/advisory";

export default function AdvisoryPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Farming Tips</h1>

      <div className="space-y-3">
        {advisoryTips.map((tip) => (
          <div key={tip.id} className="border p-3 rounded">
            <h2 className="font-semibold">{tip.title}</h2>
            <p className="text-sm text-gray-600">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}