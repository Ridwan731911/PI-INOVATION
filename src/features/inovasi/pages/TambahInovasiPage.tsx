import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const entitasOptions = [
  { value: "IDSurvey", label: "IDSurvey" },
  { value: "BKI", label: "BKI" },
  { value: "SI", label: "SI" },
  { value: "SCI", label: "SCI" },
];

export default function TambahInovasiPage() {
  const navigate = useNavigate();
  const [issue, setIssue] = useState("");
  const [kementrian, setKementrian] = useState("");
  const [entitas, setEntitas] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Add data berhasil");
    setTimeout(
      () =>
        navigate("/inovasi/detail", {
          state: { issue, kementrian, entitas },
        }),
      1000
    );
  };

  return (
    <div className="space-y-3 p-3 sm:p-6">
      <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Tambah Inovasi</h1>
      <Breadcrumb />

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border-2 border-gray-200 bg-white p-4 shadow-md sm:p-6"
      >
        <div className="space-y-6">
          {/* Issue */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Issue / Informasi Awal
            </label>
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              rows={5}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Kementrian */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Kementrian / Lembaga
            </label>
            <input
              type="text"
              value={kementrian}
              onChange={(e) => setKementrian(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Rekomendasi Entitas */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Rekomendasi Entitas
            </label>
            <select
              value={entitas}
              onChange={(e) => setEntitas(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm text-gray-500 focus:border-blue-500 focus:outline-none"
            >
              <option value="">-- Select List --</option>
              {entitasOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <hr className="my-6" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
