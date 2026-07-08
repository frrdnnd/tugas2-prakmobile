export type Course = {
  id: string;
  kode: string;
  nama: string;
  sks: number;
  dosen: string;
};

export type Meeting = {
  id: string;
  namaMatkul: string;
  pertemuanKe: number;
  topik: string;
  tanggal: string;
};

export type ScheduleItem = {
  id: string;
  namaMatkul: string;
  ruangan: string;
  jamMulai: string;
  jamSelesai: string;
};

export type ScheduleSection = {
  title: string;
  data: ScheduleItem[];
};
