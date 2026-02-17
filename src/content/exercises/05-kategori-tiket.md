---
title: "Kategori Tiket Bioskop"
description: "Latihan menggunakan kondisional bertingkat (IF-ELSE IF) untuk mengecek lebih dari dua kemungkinan."
level: "Level 1: Dasar"
topik: "Kondisi Bertingkat"
pubDate: 2026-02-17
solution: |
  ## Pseudocode

  ```
  ALGORITMA KategoriTiket

  INPUT umur

  IF umur < 12 THEN
      harga = 20000
  ELSE IF umur >= 12 AND umur <= 59 THEN
      harga = 50000
  ELSE
      harga = 30000
  END IF

  PRINT "Harga tiket Anda adalah: Rp " + harga

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima umur pengunjung
  2. **Cek kondisi bertingkat**:
     - Anak-anak (< 12): Rp 20.000
     - Dewasa (12-59): Rp 50.000
     - Lansia (>= 60): Rp 30.000
  3. **Output**: Tampilkan harga sesuai kategori

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan harga khusus untuk hari tertentu (weekend lebih mahal)
  - Berikan diskon 50% untuk anak di bawah 5 tahun
  - Cek juga apakah pengunjung member (dapat diskon tambahan)
---

## 📝 Problem

Bioskop "Perogeremmer" memiliki aturan harga tiket berdasarkan umur:
- Anak-anak (di bawah 12 tahun): Rp 20.000
- Dewasa (12 sampai 59 tahun): Rp 50.000
- Lansia (60 tahun ke atas): Rp 30.000

Minta input umur pengunjung, lalu tentukan dan tampilkan harga tiket yang harus dibayar.

### Input
Angka mewakili `umur`.

### Output
Harga tiket yang sesuai.

### Contoh

| Input | Output                          |
|-------|---------------------------------|
| 8     | Harga tiket Anda adalah: Rp 20000 |
| 25    | Harga tiket Anda adalah: Rp 50000 |
| 65    | Harga tiket Anda adalah: Rp 30000 |

## 💡 Tips

> Gunakan IF-ELSE IF-ELSE untuk mengecek kondisi yang berurutan. Pastikan urutan kondisi benar - cek yang paling spesifik dulu (misalnya: cek < 12 sebelum cek <= 59).
