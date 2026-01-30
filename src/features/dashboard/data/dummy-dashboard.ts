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
  { id: "IDS-INO-1", projectName: "KLH", kategori: "Layanan Baru", entitas: "SUCONFINDO", status: "Konsep", pengusulIde: "CEO IDSurvey", informasiAwal: "Kebutuhan layanan pengelolaan lingkungan hidup", kementrian: "Kementerian Lingkungan Hidup dan Kehutanan" },
  { id: "IDS-INO-2", projectName: "Lab", kategori: "Layanan Baru", entitas: "SUCONFINDO", status: "Pengembangan", pengusulIde: "COO IDSurvey", informasiAwal: "Pengembangan laboratorium pengujian terintegrasi", kementrian: "Kementerian Perindustrian" },
  { id: "IDS-INO-3", projectName: "Makan Bergizi (BGN)", kategori: "Pengayaan Layanan", entitas: "Surveyor Indonesia", status: "Perancangan", pengusulIde: "CFO IDSurvey", informasiAwal: "Program makanan bergizi nasional membutuhkan verifikasi", kementrian: "Badan Gizi Nasional" },
  { id: "IDS-INO-4", projectName: "Master List (BKPM)", kategori: "Proses Internal", entitas: "BKI", status: "Implementasi", pengusulIde: "CEO IDSurvey", informasiAwal: "Digitalisasi master list fasilitas penanaman modal", kementrian: "BKPM" },
  { id: "IDS-INO-5", projectName: "Halal Luar Negeri", kategori: "Pengayaan Layanan", entitas: "SUCONFINDO", status: "Konsep", pengusulIde: "COO IDSurvey", informasiAwal: "Ekspansi sertifikasi halal ke pasar internasional", kementrian: "Kementerian Agama" },
  { id: "IDS-INO-6", projectName: "Digital Twin", kategori: "Teknologi Pendukung", entitas: "BKI", status: "Perancangan", pengusulIde: "CFO IDSurvey", informasiAwal: "Penerapan digital twin untuk inspeksi kapal", kementrian: "Kementerian Perhubungan" },
  { id: "IDS-INO-7", projectName: "E-Sertifikasi", kategori: "Layanan Baru", entitas: "SUCONFINDO", status: "Implementasi", pengusulIde: "CEO IDSurvey", informasiAwal: "Sertifikasi elektronik untuk efisiensi proses", kementrian: "Kementerian Perdagangan" },
  { id: "IDS-INO-8", projectName: "Smart Inspection", kategori: "Teknologi Pendukung", entitas: "Surveyor Indonesia", status: "Pengembangan", pengusulIde: "COO IDSurvey", informasiAwal: "Inspeksi berbasis IoT dan AI", kementrian: "Kementerian Perindustrian" },
  { id: "IDS-INO-9", projectName: "Blockchain Audit", kategori: "Model Bisnis", entitas: "BKI", status: "Konsep", pengusulIde: "CFO IDSurvey", informasiAwal: "Audit trail menggunakan teknologi blockchain", kementrian: "Kementerian Keuangan" },
  { id: "IDS-INO-10", projectName: "AI Quality Control", kategori: "Proses Internal", entitas: "SUCONFINDO", status: "Pengembangan", pengusulIde: "CEO IDSurvey", informasiAwal: "Kontrol kualitas otomatis berbasis kecerdasan buatan", kementrian: "Kementerian Perindustrian" },
  { id: "IDS-INO-11", projectName: "Green Energy Cert", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Perancangan", pengusulIde: "COO IDSurvey", informasiAwal: "Sertifikasi energi terbarukan", kementrian: "Kementerian ESDM" },
  { id: "IDS-INO-12", projectName: "IoT Monitoring", kategori: "Teknologi Pendukung", entitas: "BKI", status: "Implementasi", pengusulIde: "CFO IDSurvey", informasiAwal: "Monitoring real-time berbasis IoT untuk aset maritim", kementrian: "Kementerian Perhubungan" },
  { id: "IDS-INO-13", projectName: "Cloud Migration", kategori: "Proses Internal", entitas: "SUCONFINDO", status: "Implementasi", pengusulIde: "CEO IDSurvey", informasiAwal: "Migrasi infrastruktur ke cloud", kementrian: "Kementerian Kominfo" },
  { id: "IDS-INO-14", projectName: "Mobile App", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Pengembangan", pengusulIde: "COO IDSurvey", informasiAwal: "Aplikasi mobile untuk layanan pelanggan", kementrian: "Kementerian BUMN" },
  { id: "IDS-INO-15", projectName: "Data Analytics", kategori: "Model Bisnis", entitas: "BKI", status: "Perancangan", pengusulIde: "CFO IDSurvey", informasiAwal: "Platform analitik data untuk insight bisnis", kementrian: "Kementerian Kominfo" },
  { id: "IDS-INO-16", projectName: "Compliance Hub", kategori: "Pengayaan Layanan", entitas: "SUCONFINDO", status: "Konsep", pengusulIde: "CEO IDSurvey", informasiAwal: "Hub terpusat untuk kepatuhan regulasi", kementrian: "Kementerian Hukum dan HAM" },
  { id: "IDS-INO-17", projectName: "Remote Audit", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Implementasi", pengusulIde: "COO IDSurvey", informasiAwal: "Audit jarak jauh menggunakan teknologi video", kementrian: "Kementerian Keuangan" },
  { id: "IDS-INO-18", projectName: "Risk Engine", kategori: "Proses Internal", entitas: "BKI", status: "Dihentikan", pengusulIde: "CFO IDSurvey", informasiAwal: "Mesin penilaian risiko otomatis", kementrian: "Kementerian BUMN" },
  { id: "IDS-INO-19", projectName: "Portal Klien", kategori: "Pengayaan Layanan", entitas: "SUCONFINDO", status: "Pengembangan", pengusulIde: "CEO IDSurvey", informasiAwal: "Portal self-service untuk klien", kementrian: "Kementerian Perdagangan" },
  { id: "IDS-INO-20", projectName: "Drone Survey", kategori: "Teknologi Pendukung", entitas: "Surveyor Indonesia", status: "Dihentikan", pengusulIde: "COO IDSurvey", informasiAwal: "Survei menggunakan drone untuk area sulit dijangkau", kementrian: "Kementerian PUPR" },
  { id: "IDS-INO-21", projectName: "Carbon Tracking", kategori: "Model Bisnis", entitas: "BKI", status: "Konsep", pengusulIde: "CFO IDSurvey", informasiAwal: "Pelacakan jejak karbon untuk industri maritim", kementrian: "Kementerian Lingkungan Hidup dan Kehutanan" },
  { id: "IDS-INO-22", projectName: "Auto Reporting", kategori: "Proses Internal", entitas: "SUCONFINDO", status: "Implementasi", pengusulIde: "CEO IDSurvey", informasiAwal: "Otomatisasi pembuatan laporan inspeksi", kementrian: "Kementerian Perindustrian" },
  { id: "IDS-INO-23", projectName: "Supply Chain Verify", kategori: "Layanan Baru", entitas: "Surveyor Indonesia", status: "Perancangan", pengusulIde: "COO IDSurvey", informasiAwal: "Verifikasi rantai pasok end-to-end", kementrian: "Kementerian Perdagangan" },
  { id: "IDS-INO-24", projectName: "Cyber Security Audit", kategori: "Pengayaan Layanan", entitas: "BKI", status: "Dihentikan", pengusulIde: "CFO IDSurvey", informasiAwal: "Audit keamanan siber untuk infrastruktur kritis", kementrian: "Kementerian Kominfo" },
  { id: "IDS-INO-25", projectName: "Legacy Modernization", kategori: "Teknologi Pendukung", entitas: "SUCONFINDO", status: "Pengembangan", pengusulIde: "CEO IDSurvey", informasiAwal: "Modernisasi sistem legacy ke arsitektur modern", kementrian: "Kementerian BUMN" },
];
