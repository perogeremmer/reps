---
title: "Cek Status Kelulusan"
description: "Latihan menggunakan struktur kondisional (IF-ELSE) sederhana untuk menentukan hasil akhir."
level: "Level 1: Dasar"
topik: "Kondisi (If-Else)"
pubDate: 2026-02-17
solution: |
  ## Pseudocode

  ```
  ALGORITMA CekKelulusan

  INPUT nilai_string
  nilai_siswa = PARSE(nilai_string)

  IF nilai_siswa >= 75 THEN
      OUTPUT "Lulus"
  ELSE
      OUTPUT "Remedial"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima nilai dari user
  2. **Cek kondisi**: Bandingkan nilai dengan batas kelulusan (75)
  3. **Keputusan**: 
     - Jika >= 75, output "Lulus"
     - Jika < 75, output "Remedial"
  4. **Struktur**: IF-ELSE untuk dua kemungkinan (ya/tidak)

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan grade (A, B, C, D) berdasarkan rentang nilai
  - Cek juga kehadiran (minimal 80% hadir baru bisa lulus)
  - Berikan pesan motivasi berbeda untuk setiap grade
---

## 📝 Problem

Sebuah sekolah memiliki aturan bahwa nilai minimal untuk lulus ujian adalah 75.

Buatlah logika yang menerima input nilai dari siswa. Jika nilai lebih besar atau sama dengan 75, cetak "Lulus". Jika di bawah 75, cetak "Remedial".

### Input
Sebuah angka mewakili `nilai_siswa`.

### Output
Teks "Lulus" atau "Remedial".

### Contoh

| Input | Output   |
|-------|----------|
| 80    | Lulus    |
| 75    | Lulus    |
| 60    | Remedial |
| 0     | Remedial |

## 💡 Tips

> Gunakan operator perbandingan `>=` (lebih besar sama dengan) untuk cek batas minimal. Struktur IF-ELSE cocok untuk keputusan yang hanya punya dua kemungkinan.
