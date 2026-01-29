import { useState, useMemo } from "react";
import type { Inovasi } from "../schemas/dashboard-schema";

interface Props {
  data: Inovasi[];
}

export default function DaftarInovasiTable({ data }: Props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filtered = useMemo(() => {
    if (!search) return data;
    const q = search.toLowerCase();
    return data.filter(
      (item) =>
        item.id.toLowerCase().includes(q) ||
        item.projectName.toLowerCase().includes(q) ||
        item.kategori.toLowerCase().includes(q) ||
        item.entitas.toLowerCase().includes(q) ||
        item.status.toLowerCase().includes(q)
    );
  }, [data, search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (p: number) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-md sm:p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Daftar Inovasi</h3>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          Show
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="rounded border px-2 py-1"
          >
            {[5, 10, 25].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          Rows
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full rounded border px-3 py-1.5 text-sm sm:w-auto"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="px-4 py-3">ID Inovasi</th>
              <th className="px-4 py-3">Project Name</th>
              <th className="px-4 py-3">Kategori Inovasi</th>
              <th className="px-4 py-3">Entitas Penanggung Jawab</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((item, idx) => (
              <tr
                key={item.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.projectName}</td>
                <td className="px-4 py-3">{item.kategori}</td>
                <td className="px-4 py-3">{item.entitas}</td>
                <td className="px-4 py-3">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1 text-sm">
        <button
          onClick={() => handlePageChange(1)}
          disabled={page === 1}
          className="rounded px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
        >
          &laquo;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePageChange(p)}
            className={`rounded px-2.5 py-1 ${
              p === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={page === totalPages}
          className="rounded px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}
