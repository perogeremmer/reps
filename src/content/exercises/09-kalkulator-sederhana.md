---
title: "Kalkulator Sederhana"
description: "Latihan menggunakan kondisional untuk membuat kalkulator dengan operasi dasar (tambah, kurang, kali, bagi)."
level: "Level 1: Dasar"
topik: "Kondisi Bertingkat"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA KalkulatorSederhana

  INPUT angka1
  INPUT angka2
  INPUT operator  -- (+, -, *, /)

  IF operator == "+" THEN
      hasil = angka1 + angka2
      PRINT "Hasil: " + hasil
  ELSE IF operator == "-" THEN
      hasil = angka1 - angka2
      PRINT "Hasil: " + hasil
  ELSE IF operator == "*" THEN
      hasil = angka1 * angka2
      PRINT "Hasil: " + hasil
  ELSE IF operator == "/" THEN
      IF angka2 == 0 THEN
          PRINT "Error: Tidak bisa dibagi dengan nol!"
      ELSE
          hasil = angka1 / angka2
          PRINT "Hasil: " + hasil
      END IF
  ELSE
      PRINT "Operator tidak valid!"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima dua angka dan satu operator
  2. **Cek operator**: Gunakan IF-ELSE IF untuk mengecek jenis operasi
  3. **Validasi**: Pastikan operator valid
  4. **Kasus khusus**: Cek pembagian dengan nol
  5. **Hitung dan tampilkan**: Lakukan operasi matematika dan tampilkan hasil

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan operasi modulo (%)
  - Tambahkan operasi pangkat (^)
  - Buat kalkulator yang bisa menerima 3 angka
  - Simpan riwayat perhitungan
---

## 📝 Problem

Buatlah kalkulator sederhana yang dapat melakukan operasi dasar matematika: penjumlahan, pengurangan, perkalian, dan pembagian.

### Input
- `angka1`: Bilangan pertama
- `angka2`: Bilangan kedua  
- `operator`: String berisi +, -, *, atau /

### Output
- Hasil perhitungan, atau pesan error jika operator tidak valid atau pembagian dengan nol

### Contoh

| angka1 | angka2 | operator | Output                          |
|--------|--------|----------|--------------------------------|
| 10     | 5      | +        | Hasil: 15                      |
| 10     | 5      | -        | Hasil: 5                       |
| 10     | 5      | *        | Hasil: 50                      |
| 10     | 5      | /        | Hasil: 2                       |
| 10     | 0      | /        | Error: Tidak bisa dibagi dengan nol! |
| 10     | 5      | x        | Operator tidak valid!          |

## 💡 Tips

> Jangan lupa handle kasus pembagian dengan nol! Gunakan nested IF untuk cek kondisi khusus dalam setiap operasi.
