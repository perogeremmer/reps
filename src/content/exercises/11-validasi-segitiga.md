---
title: "Validasi Bentuk Segitiga"
description: "Latihan logika matematika untuk mengecek apakah tiga sisi bisa membentuk sebuah segitiga."
level: "Level 1: Dasar"
topik: "Logika Matematika"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA ValidasiSegitiga

  INPUT sisi_a_string
  INPUT sisi_b_string
  INPUT sisi_c_string
  
  sisi_a = PARSE(sisi_a_string)
  sisi_b = PARSE(sisi_b_string)
  sisi_c = PARSE(sisi_c_string)

  -- Cek ketiga syarat sekaligus
  IF (sisi_a + sisi_b > sisi_c) AND (sisi_a + sisi_c > sisi_b) AND (sisi_b + sisi_c > sisi_a) THEN
      PRINT "Bisa membentuk segitiga"
  ELSE
      PRINT "Tidak bisa membentuk segitiga"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima panjang tiga sisi
  2. **Validasi**: Cek ketiga syarat segitiga menggunakan AND
  3. **Output**: Tampilkan apakah bisa membentuk segitiga

  ### Syarat Segitiga:
  - a + b > c
  - a + c > b
  - b + c > a

  ## Variasi

  Coba modifikasi untuk:
  - Tentukan jenis segitiga (sama sisi, sama kaki, sembarang)
  - Cek segitiga siku-siku menggunakan teorema Pythagoras
  - Hitung keliling dan luas segitiga (jika valid)
---

## 📝 Problem

Tidak semua kombinasi 3 garis bisa membentuk segitiga. Syarat segitiga adalah: **Jumlah panjang dua sisi manapun harus lebih besar dari sisi ketiganya.** (a + b > c, a + c > b, dan b + c > a).

Minta input panjang sisi A, sisi B, dan sisi C. Tentukan apakah ketiga sisi tersebut bisa membentuk segitiga atau tidak.

### Input
`sisi_a`, `sisi_b`, `sisi_c`.

### Output
"Bisa membentuk segitiga" atau "Tidak bisa membentuk segitiga".

### Contoh

| Input      | Output                        |
|------------|-------------------------------|
| 3, 4, 5    | Bisa membentuk segitiga       |
| 5, 5, 5    | Bisa membentuk segitiga       |
| 1, 2, 3    | Tidak bisa membentuk segitiga |
| 10, 5, 5   | Tidak bisa membentuk segitiga |

## 💡 Tips

> Semua sisi harus bernilai positif. Jangan lupa cek bahwa setiap sisi > 0 sebelum melakukan validasi syarat segitiga.
