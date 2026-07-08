import { Course, Meeting, ScheduleSection } from '../types';

export const courses: Course[] = [
  {
    id: 'TI212297',
    kode: 'TI212297',
    nama: 'Algoritma dan Pemrograman I',
    sks: 2,
    dosen: 'Dwi Fiqri Qurniawan, S.T., M.Sc',
  },
  {
    id: 'TI214303',
    kode: 'TI214303',
    nama: 'Jaringan Komputer',
    sks: 2,
    dosen: 'Ir. Apri Siswanto, S.Kom., M.Kom., Ph.D',
  },
  {
    id: 'TI215310',
    kode: 'TI215310',
    nama: 'Pemrograman Mobile',
    sks: 2,
    dosen: 'Panji Rachmat Setiawan, S.Kom., MMSI',
  },
  {
    id: 'TI216311',
    kode: 'TI216311',
    nama: 'Natural Language Processing',
    sks: 2,
    dosen: 'Dr. Arbi Haza Nasution, B.IT.(Hons), M.IT',
  },
  {
    id: 'TI216312',
    kode: 'TI216312',
    nama: 'Big Data',
    sks: 2,
    dosen: 'Dr. Ir. Evizal, S.T., M.Eng',
  },
  {
    id: 'TI216313',
    kode: 'TI216313',
    nama: 'Machine Learning',
    sks: 2,
    dosen: 'Ause Labellapansa, S.T., M.Cs., M.Kom',
  },
  {
    id: 'TI216148',
    kode: 'TI216148',
    nama: 'Interaksi Manusia dan Komputer',
    sks: 3,
    dosen: 'Sri Listia Rosa, S.T., M.Sc',
  },
  {
    id: 'TI214304',
    kode: 'TI214304',
    nama: 'Probabilitas dan Statistik',
    sks: 2,
    dosen: 'Prof. Abdullah, S.Si., M.Kom., Ph.D',
  },
  {
    id: 'TI212298',
    kode: 'TI212298',
    nama: 'Aljabar Linear',
    sks: 3,
    dosen: 'Dr. Astri Wahyuni, M.Pd',
  },
];

export const meetings: Meeting[] = [
  { id: 'MT-01', namaMatkul: 'Algoritma dan Pemrograman I', pertemuanKe: 1, topik: 'Pengenalan Algoritma dan Flowchart', tanggal: '9 Feb 2026' },
  { id: 'MT-02', namaMatkul: 'Algoritma dan Pemrograman I', pertemuanKe: 2, topik: 'Struktur Kontrol dan Perulangan', tanggal: '16 Feb 2026' },
  { id: 'MT-03', namaMatkul: 'Jaringan Komputer', pertemuanKe: 1, topik: 'Model OSI dan TCP/IP', tanggal: '9 Feb 2026' },
  { id: 'MT-04', namaMatkul: 'Jaringan Komputer', pertemuanKe: 2, topik: 'Subnetting dan Routing Dasar', tanggal: '13 Feb 2026' },
  { id: 'MT-05', namaMatkul: 'Pemrograman Mobile', pertemuanKe: 1, topik: 'Pengenalan React Native dan Expo', tanggal: '10 Feb 2026' },
  { id: 'MT-06', namaMatkul: 'Pemrograman Mobile', pertemuanKe: 2, topik: 'Component, Props, dan State', tanggal: '17 Feb 2026' },
  { id: 'MT-07', namaMatkul: 'Pemrograman Mobile', pertemuanKe: 3, topik: 'Handling Lists dan Data Rendering', tanggal: '24 Feb 2026' },
  { id: 'MT-08', namaMatkul: 'Natural Language Processing', pertemuanKe: 1, topik: 'Text Preprocessing dan Tokenisasi', tanggal: '11 Feb 2026' },
  { id: 'MT-09', namaMatkul: 'Big Data', pertemuanKe: 1, topik: 'Arsitektur Big Data dan Hadoop Ecosystem', tanggal: '11 Feb 2026' },
  { id: 'MT-10', namaMatkul: 'Machine Learning', pertemuanKe: 1, topik: 'Supervised vs Unsupervised Learning', tanggal: '12 Feb 2026' },
  { id: 'MT-11', namaMatkul: 'Interaksi Manusia dan Komputer', pertemuanKe: 1, topik: 'Prinsip Usability dan User-Centered Design', tanggal: '12 Feb 2026' },
  { id: 'MT-12', namaMatkul: 'Probabilitas dan Statistik', pertemuanKe: 1, topik: 'Distribusi Probabilitas Diskrit', tanggal: '13 Feb 2026' },
  { id: 'MT-13', namaMatkul: 'Aljabar Linear', pertemuanKe: 1, topik: 'Matriks dan Operasi Dasar', tanggal: '13 Feb 2026' },
];

export const scheduleSections: ScheduleSection[] = [
  {
    title: 'Senin',
    data: [
      { id: 'SC-SEN-01', namaMatkul: 'Algoritma dan Pemrograman I', ruangan: '3A.1.09 - Teknik A', jamMulai: '07:00', jamSelesai: '08:40' },
      { id: 'SC-SEN-02', namaMatkul: 'Jaringan Komputer', ruangan: '3A.1.09 - Teknik A', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'SC-SEN-03', namaMatkul: 'Pemrograman Mobile', ruangan: '3C.2.05 - Teknik C', jamMulai: '13:00', jamSelesai: '14:40' },
    ],
  },
  {
    title: 'Selasa',
    data: [
      { id: 'SC-SEL-01', namaMatkul: 'Pemrograman Mobile', ruangan: '3C.2.07 - Teknik C', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'SC-SEL-02', namaMatkul: 'Natural Language Processing', ruangan: '3C.1.04 - Teknik C', jamMulai: '10:30', jamSelesai: '12:10' },
      { id: 'SC-SEL-03', namaMatkul: 'Big Data', ruangan: '3C.2.05 - Teknik C', jamMulai: '13:00', jamSelesai: '14:40' },
    ],
  },
  {
    title: 'Rabu',
    data: [
      { id: 'SC-RAB-01', namaMatkul: 'Machine Learning', ruangan: '3A.1.09 - Teknik A', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'SC-RAB-02', namaMatkul: 'Natural Language Processing', ruangan: '3C.1.03 - Teknik C', jamMulai: '10:30', jamSelesai: '12:10' },
      { id: 'SC-RAB-03', namaMatkul: 'Interaksi Manusia dan Komputer', ruangan: '3D.3.15 - Teknik D', jamMulai: '13:00', jamSelesai: '15:30' },
    ],
  },
  {
    title: 'Kamis',
    data: [
      { id: 'SC-KAM-01', namaMatkul: 'Probabilitas dan Statistik', ruangan: '3C.2.05 - Teknik C', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'SC-KAM-02', namaMatkul: 'Aljabar Linear', ruangan: '3C.1.03 - Teknik C', jamMulai: '10:30', jamSelesai: '13:00' },
    ],
  },
  {
    title: 'Jumat',
    data: [
      { id: 'SC-JUM-01', namaMatkul: 'Jaringan Komputer', ruangan: '3C.2.05 - Teknik C', jamMulai: '07:00', jamSelesai: '08:40' },
      { id: 'SC-JUM-02', namaMatkul: 'Pemrograman Mobile', ruangan: '3C.2.07 - Teknik C', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'SC-JUM-03', namaMatkul: 'Natural Language Processing', ruangan: '3C.1.04 - Teknik C', jamMulai: '10:30', jamSelesai: '12:10' },
      { id: 'SC-JUM-04', namaMatkul: 'Machine Learning', ruangan: '3C.1.04 - Teknik C', jamMulai: '13:30', jamSelesai: '15:10' },
    ],
  },
];
