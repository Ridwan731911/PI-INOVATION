import type {
  Inovasi,
  InovasiPerBulan,
  InovasiPerKategori,
  StatCard,
} from "../schemas/dashboard-schema";

export const statCards: StatCard[] = [
  { label: "Total Ide Inovasi", value: 41, color: "text-green-500" },
  { label: "Konsep", value: 7, color: "text-cyan-500" },
  { label: "Perancangan", value: 12, color: "text-blue-500" },
  { label: "Dalam Pengembangan", value: 8, color: "text-orange-500" },
  { label: "Implementasi", value: 11, color: "text-teal-500" },
  { label: "Dihentikan", value: 3, color: "text-red-500" },
];

export const inovasiPerBulan: InovasiPerBulan[] = [
  { bulan: "Jan", jumlah: 3 },
  { bulan: "Feb", jumlah: 5 },
  { bulan: "Mar", jumlah: 9 },
  { bulan: "Apr", jumlah: 2 },
  { bulan: "Mei", jumlah: 5 },
  { bulan: "Jun", jumlah: 0 },
  { bulan: "Jul", jumlah: 2 },
  { bulan: "Agu", jumlah: 4 },
  { bulan: "Sep", jumlah: 2 },
  { bulan: "Okt", jumlah: 6 },
  { bulan: "Nov", jumlah: 1 },
  { bulan: "Des", jumlah: 2 },
];

export const inovasiPerKategori: InovasiPerKategori[] = [
  { kategori: "Layanan Baru", jumlah: 14 },
  { kategori: "Pengayaan Layanan", jumlah: 7 },
  { kategori: "Model Bisnis", jumlah: 4 },
  { kategori: "Proses Internal", jumlah: 9 },
  { kategori: "Teknologi Pendukung", jumlah: 7 },
];

export const daftarInovasi: Inovasi[] = [
  { id: "IDS-INO-1", projectName: "KLH", kategori: "Layanan Baru", entitas: "SUCONFINDO", status: "Konsep" },
  { id: "IDS-INO-2", projectName: "Lab", kategori: "Layanan Baru", entitas: "SUCONFINDO", status: "Pengembangan" },
  { id: "IDS-INO-3", projectName: "Makan Bergizi (BGN)", kategori: "Pengayaan Layanan", entitas: "Surveyor Indonesia", status: "Perancangan" },
  { id: "IDS-INO-4", projectName: "Master List (BKPM)", kategori: "Proses Internal", entitas: "BKI", status: "Implementasi" },
  { id: "IDS-INO-5", projectName: "Halal Luar Negeri", kategori: "Pengayaan Layanan", entitas: "SUCONFINDO", status: "Konsep" },
  { id: "IDS-INO-6", projectName: "Digital Twin", kategori: "Teknologi Pendukung", entitas: "BKI", status: "Perancangan" },
  { id: "IDS-INO-7", projectName: "E-Sertifikasi", kategori: "Layanan Baru", entitas: "SUCONFINDO", status: "Implementasi" },
  { id: "IDS-INO-8", projectName: "Smart Inspection", kategori: "Teknologi Pendukung", entitas: "Surveyor Indonesia", status: "Pengembangan" },
  { id: "IDS-INO-9", projectName: "Blockchain Audit", kategori: "Model Bisnis", entitas: "BKI", status: "Konsep" },
  { id: "IDS-INO-10", projectName: "AI Quality Control", kategori: "Proses Internal", entitas: "SUCONFINDO", status: "Pengembangan" },
  { id: "IDS-INO-11", projectName: "Green Energy Cert", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Perancangan" },
  { id: "IDS-INO-12", projectName: "IoT Monitoring", kategori: "Teknologi Pendukung", entitas: "BKI", status: "Implementasi" },
  { id: "IDS-INO-13", projectName: "Cloud Migration", kategori: "Proses Internal", entitas: "SUCONFINDO", status: "Implementasi" },
  { id: "IDS-INO-14", projectName: "Mobile App", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Pengembangan" },
  { id: "IDS-INO-15", projectName: "Data Analytics", kategori: "Model Bisnis", entitas: "BKI", status: "Perancangan" },
  { id: "IDS-INO-16", projectName: "Compliance Hub", kategori: "Pengayaan Layanan", entitas: "SUCONFINDO", status: "Konsep" },
  { id: "IDS-INO-17", projectName: "Remote Audit", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Implementasi" },
  { id: "IDS-INO-18", projectName: "Risk Engine", kategori: "Proses Internal", entitas: "BKI", status: "Dihentikan" },
  { id: "IDS-INO-19", projectName: "Portal Klien", kategori: "Pengayaan Layanan", entitas: "SUCONFINDO", status: "Pengembangan" },
  { id: "IDS-INO-20", projectName: "Drone Survey", kategori: "Teknologi Pendukung", entitas: "Surveyor Indonesia", status: "Dihentikan" },
  { id: "IDS-INO-21", projectName: "Carbon Tracking", kategori: "Model Bisnis", entitas: "BKI", status: "Konsep" },
  { id: "IDS-INO-22", projectName: "Auto Reporting", kategori: "Proses Internal", entitas: "SUCONFINDO", status: "Implementasi" },
  { id: "IDS-INO-23", projectName: "Supply Chain Verify", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Perancangan" },
  { id: "IDS-INO-24", projectName: "Cyber Security Audit", kategori: "Pengayaan Layanan", entitas: "BKI", status: "Dihentikan" },
  { id: "IDS-INO-25", projectName: "Legacy Modernization", kategori: "Teknologi Pendukung", entitas: "SUCONFINDO", status: "Pengembangan" },
];
