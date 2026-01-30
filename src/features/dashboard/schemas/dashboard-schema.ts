import { z } from "zod";

export const inovasiStatusEnum = z.enum([
  "Konsep",
  "Perancangan",
  "Pengembangan",
  "Implementasi",
  "Dihentikan",
]);

export const kategoriInovasiEnum = z.enum([
  "Layanan Baru",
  "Pengayaan Layanan",
  "Model Bisnis",
  "Proses Internal",
  "Teknologi Pendukung",
]);

export const inovasiSchema = z.object({
  id: z.string(),
  projectName: z.string(),
  kategori: kategoriInovasiEnum,
  entitas: z.string(),
  status: inovasiStatusEnum,
  pengusulIde: z.string(),
  informasiAwal: z.string(),
  kementrian: z.string(),
});

export const inovasiPerBulanSchema = z.object({
  bulan: z.string(),
  jumlah: z.number(),
});

export const inovasiPerKategoriSchema = z.object({
  kategori: kategoriInovasiEnum,
  jumlah: z.number(),
});

export const statCardSchema = z.object({
  label: z.string(),
  value: z.number(),
  color: z.string(),
});

export type Inovasi = z.infer<typeof inovasiSchema>;
export type InovasiPerBulan = z.infer<typeof inovasiPerBulanSchema>;
export type InovasiPerKategori = z.infer<typeof inovasiPerKategoriSchema>;
export type StatCard = z.infer<typeof statCardSchema>;
export type InovasiStatus = z.infer<typeof inovasiStatusEnum>;
export type KategoriInovasi = z.infer<typeof kategoriInovasiEnum>;
