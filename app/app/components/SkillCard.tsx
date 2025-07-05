interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export default function SkillCard({ icon, title, description, level = "Intermediate" }: SkillCardProps) {
  const levelColors = {
    Beginner: "bg-yellow-100 text-yellow-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-green-100 text-green-800"
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${levelColors[level]}`}>
        {level}
      </span>
    </div>
  );
}
