import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import type { InovasiPerKategori } from "../schemas/dashboard-schema";

const COLORS = ["#06b6d4", "#f97316", "#7c3aed", "#eab308", "#3b82f6"];

interface Props {
  data: InovasiPerKategori[];
}

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
    >
      {value}
    </text>
  );
};

export default function InovasiPerKategoriChart({ data }: Props) {
  return (
    <div className="rounded-xl border-2 border-gray-200 bg-white p-3 shadow-md sm:p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-800">
        Inovasi per Kategori
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="jumlah"
            nameKey="kategori"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={110}
            label={renderCustomLabel}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="square"
            iconSize={12}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
