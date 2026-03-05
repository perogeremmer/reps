---
title: "Cari Posisi Data (Linear Search)"
description: "Mencari di urutan ke berapa sebuah data berada. Teknik pencarian paling dasar dalam computer science."
level: "Level 2: Looping & Array"
topik: "Searching"
pubDate: 2026-02-20
solution: |
  ## Pseudocode

  ```
  ALGORITMA CariPosisi

  data_nama = ["Budi", "Siti", "Agus", "Winda", "Joko"]
  INPUT cari_nama
  ketemu = FALSE
  posisi = -1

  -- Loop cek satu per satu
  FOR i = 0 TO 4 DO
      IF data_nama[i] == cari_nama THEN
          posisi = i
          ketemu = TRUE
          BREAK -- Berhenti loop jika sudah ketemu
      END IF
  END FOR

  IF ketemu == TRUE THEN
      PRINT "Nama ditemukan di indeks ke: " + posisi
  ELSE
      PRINT "Data tidak ditemukan"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set flag `ketemu = FALSE` dan `posisi = -1`
  2. **Loop**: Iterasi setiap elemen array
  3. **Bandingkan**: Cek jika elemen sama dengan yang dicari
  4. **Update**: Jika ketemu, simpan posisi dan set flag
  5. **Break**: Hentikan loop lebih awal untuk efisiensi
  6. **Output**: Tampilkan hasil pencarian

  ## Variasi

  Coba modifikasi untuk:
  - Cari semua kemunculan (jika ada duplikat)
  - Cari dengan case-insensitive
  - Implementasikan Binary Search (untuk data terurut)
---

## 📝 Problem

Diberikan array nama mahasiswa: `["Budi", "Siti", "Agus", "Winda", "Joko"]`.
User menginput satu nama yang ingin dicari, misal "Agus".

Tugasmu adalah mencari di indeks (urutan) ke berapa nama tersebut berada. Jika tidak ketemu, tampilkan "Data tidak ditemukan".

*Catatan:* Indeks dimulai dari 0.

### Input
Nama yang dicari.

### Output
Posisi indeks atau pesan error.

### Contoh

| Input  | Output                              |
|--------|-------------------------------------|
| Agus   | Nama ditemukan di indeks ke: 2      |
| Budi   | Nama ditemukan di indeks ke: 0      |
| Andi   | Data tidak ditemukan                |

## 💡 Tips

> Gunakan `BREAK` untuk menghentikan loop lebih awal ketika data sudah ditemukan. Ini meningkatkan efisiensi algoritma.
