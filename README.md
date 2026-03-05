# Perogeremmer Reps

Platform latihan pemrograman untuk pemula yang fokus pada logika dan problem solving. Website ini berisi kumpulan soal-soal pemrograman dasar dengan fitur timer untuk membantu kamu berlatih dengan fokus.

🌐 **Live Demo:** [reps.perogeremmer.id](https://reps.perogeremmer.id)

---

## ✨ Fitur

- **📚 Kumpulan Soal Pemrograman** - 23+ latihan dari level dasar hingga lanjutan
- **⏱️ Timer 30 Menit** - Sistem lock dengan press-and-hold (2 detik) untuk mulai
- **💡 Solusi Tersembunyi** - Lihat solusi hanya setelah mencoba
- **🏷️ Kategori Topik** - Setiap soal memiliki label topik (Kondisi, Variabel, Perulangan, dll)
- **📱 Responsive Design** - Bisa diakses dari desktop maupun mobile
- **⚡ Static Site Generation** - Cepat dan SEO-friendly

---

## 🚀 Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [Astro](https://astro.build) | v4 | Static Site Generator |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling & UI |
| [Cloudflare Pages](https://pages.cloudflare.com) | - | Hosting & Deployment |

---

## 📁 Project Structure

```text
/
├── src/
│   ├── components/        # Astro components
│   │   └── ExerciseCard.astro
│   ├── content/           # Content collections
│   │   ├── config.ts      # Schema definisi
│   │   └── exercises/     # Markdown files soal latihan
│   │       ├── 01-ganjil-genap.md          # Level 1: Dasar
│   │       ├── 02-update-skor.md           # Level 1: Dasar
│   │       ├── 03-tukar-gelas.md           # Level 1: Dasar
│   │       ├── 04-cek-kelulusan.md         # Level 1: Dasar
│   │       ├── 05-kategori-tiket.md        # Level 1: Dasar
│   │       ├── 06-diskon-belanja.md        # Level 1: Dasar
│   │       ├── 07-konversi-suhu.md         # Level 1: Dasar
│   │       ├── 08-cek-tahun-kabisat.md     # Level 1: Dasar
│   │       ├── 09-kalkulator-sederhana.md  # Level 1: Dasar
│   │       ├── 10-hitung-rata-rata.md      # Level 2: Menengah
│   │       ├── 11-tabel-perkalian.md       # Level 2: Menengah
│   │       ├── 12-cek-bilangan-prima.md    # Level 2: Menengah
│   │       ├── 13-segitiga-bintang.md      # Level 2: Menengah
│   │       ├── 14-atm-sederhana.md         # Level 2: Menengah
│   │       ├── 15-hitung-jarak.md          # Level 1: Dasar
│   │       ├── 16-cek-positif-negatif.md   # Level 1: Dasar
│   │       ├── 17-hitung-biaya-parkir.md   # Level 1: Dasar
│   │       ├── 18-faktorial.md             # Level 2: Menengah
│   │       ├── 19-deret-fibonacci.md       # Level 2: Menengah
│   │       ├── 20-cek-palindrom.md         # Level 2: Menengah
│   │       ├── 21-cari-max-min.md          # Level 3: Lanjutan
│   │       ├── 22-linear-search.md         # Level 3: Lanjutan
│   │       └── 23-bubble-sort.md           # Level 3: Lanjutan
│   ├── layouts/           # Layout templates
│   │   └── Layout.astro
│   ├── pages/             # Routes
│   │   ├── index.astro           # Homepage - daftar soal
│   │   ├── exercise/[slug].astro  # Detail soal + timer
│   │   └── sintaks-dasar.astro   # Referensi sintaks
│   └── styles/
│       └── global.css
├── public/                # Static assets
├── dist/                  # Build output (SSG)
├── astro.config.mjs
├── wrangler.jsonc         # Cloudflare Pages config
└── package.json
```

---

## 🧞 Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server di `localhost:4321` |
| `npm run build` | Build static site ke `./dist/` |
| `npm run preview` | Preview build sebelum deploy |

---

## 📝 Menambah Soal Baru

1. Buat file markdown baru di `src/content/exercises/`
2. Gunakan format nama: `XX-nama-soal.md` (untuk urutan)
3. Isi frontmatter sesuai schema:

```yaml
---
title: "Judul Soal"
description: "Deskripsi singkat (max 160 char)"
level: "Level 1: Dasar"  # Level 1: Dasar, Level 2: Menengah, atau Level 3: Lanjutan
topik: "Kondisi (If-Else)"  # topik teknis
pubDate: 2026-02-17
solution: |
  ## Pseudocode
  ```
  ALGORITMA NamaAlgoritma
    // langkah-langkah solusi
  END ALGORITMA
  ```
---
```

4. Tulis deskripsi soal di body markdown

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. Push ke GitHub/GitLab
2. Connect repo di [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`

Atau deploy via Wrangler CLI:

```bash
npm run build
npx wrangler pages deploy dist
```

---

## 🎯 Latihan yang Tersedia

### ⭐ Level 1: Dasar (12 Latihan)

| No | Judul | Topik |
|:---:|-------|-------|
| 01 | Cek Ganjil atau Genap | Kondisi (If-Else) |
| 02 | Update Skor Pemain | Variabel & Aritmatika |
| 03 | Tukar Isi Gelas | Swap/Tukar Nilai |
| 04 | Cek Kelulusan | Kombinasi Kondisi |
| 05 | Kategori Tiket | Kondisi (If-Else) |
| 06 | Diskon Belanja | Diskon & Perhitungan |
| 07 | Konversi Suhu | Variabel & Matematika |
| 08 | Cek Tahun Kabisat | Kondisi (If-Else) |
| 09 | Kalkulator Sederhana | Kondisi Bertingkat |
| 15 | Hitung Jarak Tempuh | Variabel & Matematika |
| 16 | Cek Angka Positif Negatif | Kondisi (If-Else) |
| 17 | Hitung Biaya Parkir | Kondisi Bertingkat |

### ⭐⭐ Level 2: Menengah (8 Latihan)

| No | Judul | Topik |
|:---:|-------|-------|
| 10 | Hitung Rata-rata Nilai | Perulangan (Loop) |
| 11 | Tabel Perkalian | Perulangan Bersarang |
| 12 | Cek Bilangan Prima | Perulangan & Kondisi |
| 13 | Segitiga Bintang | Perulangan Bersarang |
| 14 | ATM Sederhana | Kombinasi Konsep |
| 18 | Faktorial Bilangan | Perulangan (Loop) |
| 19 | Deret Fibonacci | Perulangan (Loop) |
| 20 | Cek Palindrom | String & Loop |

### ⭐⭐⭐ Level 3: Lanjutan (3 Latihan)

| No | Judul | Topik |
|:---:|-------|-------|
| 21 | Cari Nilai Maximum & Minimum | Array/List |
| 22 | Linear Search | Searching Algorithm |
| 23 | Bubble Sort | Sorting Algorithm |

---

## 📄 License

MIT License - bebas digunakan untuk belajar dan mengajar.

---

> 💪 *"Ngoding itu kaya push-up. Awalnya berat, lama-lama jadi kebiasaan."*
