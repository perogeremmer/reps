# Perogeremmer Reps

Platform latihan pemrograman untuk pemula yang fokus pada logika dan problem solving. Website ini berisi kumpulan soal-soal pemrograman dasar dengan fitur timer untuk membantu kamu berlatih dengan fokus.

🌐 **Live Demo:** [reps.perogeremmer.id](https://reps.perogeremmer.id)

---

## ✨ Fitur

- **📚 Kumpulan Soal Pemrograman** - 6+ latihan dari level dasar hingga menengah
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
│   │       ├── 01-ganjil-genap.md
│   │       ├── 02-update-skor.md
│   │       ├── 03-tukar-gelas.md
│   │       ├── 04-cek-kelulusan.md
│   │       ├── 05-kategori-tiket.md
│   │       └── 06-diskon-belanja.md
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
level: "Level 1: Dasar"  # atau Level 2: Menengah
topik: "Kondisi (If-Else)"  # topik teknis
pubDate: 2026-02-17
solution: |
  ## Pseudocode
  ```
  BEGIN
    // langkah-langkah solusi
  END
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

| No | Judul | Level | Topik |
|:---:|-------|:-----:|-------|
| 01 | Cek Ganjil atau Genap | ⭐ | Kondisi (If-Else) |
| 02 | Update Skor Pemain | ⭐ | Variabel & Aritmatika |
| 03 | Tukar Isi Gelas | ⭐ | Swap/Tukar Nilai |
| 04 | Cek Kelulusan | ⭐⭐ | Kombinasi Kondisi |
| 05 | Kategori Tiket | ⭐⭐ | Kondisi (If-Else) |
| 06 | Diskon Belanja | ⭐⭐ | Diskon & Perhitungan |

---

## 📄 License

MIT License - bebas digunakan untuk belajar dan mengajar.

---

> 💪 *"Ngoding itu kaya push-up. Awalnya berat, lama-lama jadi kebiasaan."*
