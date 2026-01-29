import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const LoginPage = lazy(() =>
  import("@/features/auth").then((m) => ({ default: m.LoginPage }))
);
const DashboardLayout = lazy(() =>
  import("@/components/layout/DashboardLayout").then((m) => ({
    default: m.DashboardLayout,
  }))
);
const DashboardPage = lazy(() =>
  import("@/features/dashboard").then((m) => ({ default: m.DashboardPage }))
);
const DaftarInovasiPage = lazy(() =>
  import("@/features/inovasi").then((m) => ({ default: m.DaftarInovasiPage }))
);
const TambahInovasiPage = lazy(() =>
  import("@/features/inovasi").then((m) => ({ default: m.TambahInovasiPage }))
);
const DetailInovasiPage = lazy(() =>
  import("@/features/inovasi").then((m) => ({ default: m.DetailInovasiPage }))
);

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="size-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/inovasi" element={<DaftarInovasiPage />} />
          <Route path="/inovasi/tambah" element={<TambahInovasiPage />} />
          <Route path="/inovasi/detail" element={<DetailInovasiPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}
