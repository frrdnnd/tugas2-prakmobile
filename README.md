# Sistem Jadwal Kuliah

Aplikasi mobile untuk menampilkan ringkasan mata kuliah, daftar pertemuan, dan
jadwal kelas per hari. Dibuat dengan React Native (Expo SDK 54) + TypeScript
sebagai tugas praktikum **Handling Lists & Data Rendering**. Seluruh data
bersifat statis/hardcode (tidak ada fetch API/backend).

## Cara Install & Menjalankan

```bash
npm install
npx expo start
```

Scan QR code yang muncul menggunakan aplikasi **Expo Go** (Android/iOS), atau
tekan `a` / `i` di terminal untuk membuka emulator Android/iOS.

## Teknik Rendering List per Halaman

| Halaman | File | Teknik Rendering |
|---|---|---|
| **Ringkasan Mata Kuliah** (tab "Ringkasan") | `src/screens/SummaryScreen.tsx` | `.map()` atas array `courses`, tiap item diberi `key={course.id}` |
| **Daftar Pertemuan** (tab "Pertemuan") | `src/screens/MeetingsScreen.tsx` | `FlatList` atas array `meetings`, lengkap dengan `keyExtractor`, `ItemSeparatorComponent`, `ListHeaderComponent`, dan `ListEmptyComponent` |
| **Jadwal per Hari** (tab "Jadwal") | `src/screens/WeeklyScheduleScreen.tsx` | `SectionList` atas `scheduleSections` (dikelompokkan per hari), dengan `renderSectionHeader` yang stylingnya beda dari item biasa |

Di tab "Pertemuan" ada tombol kecil "Coba tampilan kosong (dev)" untuk
mendemokan `ListEmptyComponent` tanpa perlu mengubah data.

## Struktur Folder

```
src/
├── data/academicData.ts     # data statis: courses, meetings, scheduleSections
├── types/index.ts           # tipe Course, Meeting, ScheduleItem, ScheduleSection
├── theme/theme.ts           # warna, font, spacing, radius
├── components/              # CourseCard, MeetingItem, ScheduleItem, SectionHeader,
│                             #   ListSeparator, ListHeader, EmptyState
├── navigation/MainTabs.tsx  # bottom tab navigator (3 tab)
└── screens/                 # SummaryScreen, MeetingsScreen, WeeklyScheduleScreen
```

## Font & Tema

- Judul halaman: **Libre Caslon Text** (serif) via `@expo-google-fonts/libre-caslon-text`
- Body text: **Inter** via `@expo-google-fonts/inter`
- Aksen warna: rose/pink lembut di atas dasar putih/off-white
