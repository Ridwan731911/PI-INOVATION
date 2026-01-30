import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { daftarInovasi } from "@/features/dashboard/data/dummy-dashboard";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

type InovasiItem = (typeof daftarInovasi)[number];

export default function DaftarInovasiPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Delete modal state
  const [deleteItem, setDeleteItem] = useState<InovasiItem | null>(null);

  const filtered = useMemo(() => {
    if (!search) return daftarInovasi;
    const q = search.toLowerCase();
    return daftarInovasi.filter(
      (item) =>
        item.id.toLowerCase().includes(q) ||
        item.projectName.toLowerCase().includes(q) ||
        item.kategori.toLowerCase().includes(q) ||
        item.entitas.toLowerCase().includes(q) ||
        item.pengusulIde.toLowerCase().includes(q) ||
        item.informasiAwal.toLowerCase().includes(q) ||
        item.kementrian.toLowerCase().includes(q) ||
        item.status.toLowerCase().includes(q)
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (p: number) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  const handleDelete = () => {
    setDeleteItem(null);
    toast.success("Hapus data berhasil");
  };

  return (
    <div className="space-y-3 p-3 sm:p-6">
      <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Daftar Inovasi</h1>
      <Breadcrumb />

      <div className="rounded-xl border-2 border-gray-200 bg-white p-3 shadow-md sm:p-6">
        {/* Add Button */}
        <button
          onClick={() => navigate("/inovasi/tambah")}
          className="mb-4 rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
        >
          Add Inovasi
        </button>

        {/* Controls */}
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-3">ID Inovasi</th>
                <th className="px-4 py-3">Project Name</th>
                <th className="px-4 py-3">Kategori Inovasi</th>
                <th className="px-4 py-3">Entitas Penanggung Jawab</th>
                <th className="px-4 py-3">Pengusul Ide</th>
                <th className="px-4 py-3">Informasi Awal</th>
                <th className="px-4 py-3">Kementrian / Lembaga</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
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
                  <td className="px-4 py-3">{item.pengusulIde}</td>
                  <td className="px-4 py-3">{item.informasiAwal}</td>
                  <td className="px-4 py-3">{item.kementrian}</td>
                  <td className="px-4 py-3">{item.status}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          navigate("/inovasi/detail", {
                            state: {
                              id: item.id,
                              projectName: item.projectName,
                              kategori: item.kategori,
                              entitas: item.entitas,
                              status: item.status,
                              pengusulIde: item.pengusulIde,
                              informasiAwal: item.informasiAwal,
                              kementrian: item.kementrian,
                            },
                          })
                        }
                        className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <Pencil className="size-4" />
                      </button>
                      <button
                        onClick={() => setDeleteItem(item)}
                        className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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
                p === page ? "bg-blue-600 text-white" : "hover:bg-gray-100"
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

      {/* Delete Modal */}
      {deleteItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-lg sm:p-6">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Konfirmasi Hapus
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Apakah Anda yakin ingin menghapus inovasi{" "}
              <span className="font-semibold">{deleteItem.projectName}</span>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteItem(null)}
                className="rounded-lg border px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="rounded-lg bg-red-600 px-6 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
