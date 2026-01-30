import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default function DetailInovasiPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    id?: string;
    projectName?: string;
    kategori?: string;
    entitas?: string;
    status?: string;
    issue?: string;
    kementrian?: string;
  } | null;

  const [projectName, setProjectName] = useState(state?.projectName ?? "");
  const [projectInitiator, setProjectInitiator] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [timeline, setTimeline] = useState("");
  const [objective, setObjective] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleApproval = () => {
    setShowModal(false);
    toast.success("Approval berhasil");
    setTimeout(() => navigate("/inovasi"), 1000);
  };

  return (
    <div className="space-y-3 p-3 sm:p-6">
      <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Detail Inovasi</h1>
      <Breadcrumb />

      <div className="rounded-xl border-2 border-gray-200 bg-white p-4 shadow-md sm:p-6">
        <div className="space-y-6">
          {/* ID Inovasi */}
          {state?.id && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                ID Inovasi
              </label>
              <input
                type="text"
                value={state.id}
                disabled
                className="w-full rounded-lg border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500"
              />
            </div>
          )}

          {/* Kategori Inovasi */}
          {state?.kategori && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Kategori Inovasi
              </label>
              <input
                type="text"
                value={state.kategori}
                disabled
                className="w-full rounded-lg border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500"
              />
            </div>
          )}

          {/* Status */}
          {state?.status && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Status
              </label>
              <input
                type="text"
                value={state.status}
                disabled
                className="w-full rounded-lg border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500"
              />
            </div>
          )}

          {/* Disabled fields from Tambah */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Issue / Informasi Awal
            </label>
            <textarea
              value={state?.issue ?? ""}
              disabled
              rows={5}
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Kementrian / Lembaga
            </label>
            <input
              type="text"
              value={state?.kementrian ?? ""}
              disabled
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Rekomendasi Entitas
            </label>
            <input
              type="text"
              value={state?.entitas ?? ""}
              disabled
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500"
            />
          </div>

          {/* Editable detail fields */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Project Initiator
            </label>
            <input
              type="text"
              value={projectInitiator}
              onChange={(e) => setProjectInitiator(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Portfolio
            </label>
            <input
              type="text"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Timeline
            </label>
            <input
              type="text"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Objective & Description
            </label>
            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              rows={4}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Next Step
            </label>
            <textarea
              value={nextStep}
              onChange={(e) => setNextStep(e.target.value)}
              rows={4}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <hr className="my-6" />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-blue-700 px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Approval
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-lg sm:p-6">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Konfirmasi Approval
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Apakah Anda yakin ingin menyetujui inovasi ini?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg border px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleApproval}
                className="rounded-lg bg-blue-700 px-6 py-2 text-sm font-medium text-white hover:bg-blue-800"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
