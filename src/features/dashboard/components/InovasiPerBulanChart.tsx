import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import type { InovasiPerBulan } from "../schemas/dashboard-schema";

interface Props {
  data: InovasiPerBulan[];
}

export default function InovasiPerBulanChart({ data }: Props) {
  return (
    <div className="rounded-xl border-2 border-gray-200 bg-white p-3 shadow-md sm:p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-800">
        Inovasi per Bulan
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="jumlah"
            stroke="#14b8a6"
            strokeWidth={2}
            dot={{ r: 5, fill: "#14b8a6" }}
            activeDot={{ r: 7 }}
          >
            <LabelList dataKey="jumlah" position="top" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
