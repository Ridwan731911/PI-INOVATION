import StatCard from "../components/StatCard";
import InovasiPerBulanChart from "../components/InovasiPerBulanChart";
import InovasiPerKategoriChart from "../components/InovasiPerKategoriChart";
import DaftarInovasiTable from "../components/DaftarInovasiTable";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  statCards,
  inovasiPerBulan,
  inovasiPerKategori,
  daftarInovasi,
} from "../data/dummy-dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-3 p-3 sm:p-6">
      <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Dashboard</h1>
      <Breadcrumb />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => (
          <StatCard key={card.label} data={card} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <InovasiPerBulanChart data={inovasiPerBulan} />
        </div>
        <div className="lg:col-span-2">
          <InovasiPerKategoriChart data={inovasiPerKategori} />
        </div>
      </div>

      {/* Table */}
      <DaftarInovasiTable data={daftarInovasi} />
    </div>
  );
}
