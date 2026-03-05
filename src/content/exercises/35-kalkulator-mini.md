---
title: "Kalkulator Dua Angka"
description: "Membuat logika kalkulator sederhana yang menerima dua angka dan satu operator matematika."
level: "Level 1: Dasar"
topik: "Kondisi & Operator"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA KalkulatorMini

  INPUT angka1_string
  INPUT operator
  INPUT angka2_string
  
  angka1 = PARSE(angka1_string)
  angka2 = PARSE(angka2_string)

  IF operator == "+" THEN
      hasil = angka1 + angka2
  ELSE IF operator == "-" THEN
      hasil = angka1 - angka2
  ELSE IF operator == "*" THEN
      hasil = angka1 * angka2
  ELSE IF operator == "/" THEN
      hasil = angka1 / angka2
  ELSE
      PRINT "Error: Operator tidak dikenal"
      STOP
  END IF

  PRINT "Hasil: " + hasil

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima dua angka dan satu operator
  2. **Pilih operasi**: Gunakan IF-ELSE IF untuk memilih operasi sesuai operator
  3. **Validasi**: Jika operator tidak valid, tampilkan error
  4. **Output**: Tampilkan hasil perhitungan

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan operator modulo (%)
  - Tambahkan operator pangkat (^)
  - Handle pembagian dengan nol
  - Gunakan struktur SWITCH/CASE jika tersedia
---

## 📝 Problem

Buatlah program kalkulator mini. Program meminta 3 input berturut-turut:
1. Angka pertama
2. Operator (simbol: +, -, *, atau /)
3. Angka kedua

Lakukan operasi matematika sesuai operator yang dipilih dan tampilkan hasilnya. Jika operator tidak dikenali, tampilkan pesan error.

### Input
`angka1`, `operator`, `angka2`.

### Output
Hasil perhitungan.

### Contoh

| Input           | Output                      |
|-----------------|-----------------------------|
| 10, +, 5        | Hasil: 15                   |
| 20, -, 8        | Hasil: 12                   |
| 6, *, 7         | Hasil: 42                   |
| 100, /, 4       | Hasil: 25                   |
| 5, x, 3         | Error: Operator tidak dikenal|

## 💡 Tips

> Pastikan menangani kasus operator yang tidak valid dengan memberikan pesan error yang jelas kepada pengguna.
