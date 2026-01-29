import {
  Lightbulb,
  Gem,
  PenTool,
  Settings,
  RefreshCw,
  Ban,
} from "lucide-react";
import type { StatCard as StatCardType } from "../schemas/dashboard-schema";

const iconMap: Record<string, React.ReactNode> = {
  "Total Ide Inovasi": <Lightbulb className="h-10 w-10 text-gray-300" />,
  Konsep: <Gem className="h-10 w-10 text-gray-300" />,
  Perancangan: <PenTool className="h-10 w-10 text-gray-300" />,
  "Dalam Pengembangan": <Settings className="h-10 w-10 text-gray-300" />,
  Implementasi: <RefreshCw className="h-10 w-10 text-gray-300" />,
  Dihentikan: <Ban className="h-10 w-10 text-gray-300" />,
};

const borderColorMap: Record<string, string> = {
  "Total Ide Inovasi": "border-l-green-500",
  Konsep: "border-l-cyan-500",
  Perancangan: "border-l-blue-500",
  "Dalam Pengembangan": "border-l-orange-500",
  Implementasi: "border-l-teal-500",
  Dihentikan: "border-l-red-500",
};

interface StatCardProps {
  data: StatCardType;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border-2 border-gray-200 border-l-4 bg-white p-5 shadow-md ${borderColorMap[data.label] ?? ""}`}
    >
      <div>
        <p className={`text-sm font-medium ${data.color}`}>{data.label}</p>
        <p className="text-2xl font-bold text-gray-800 sm:text-4xl">{data.value}</p>
      </div>
      {iconMap[data.label]}
    </div>
  );
}
