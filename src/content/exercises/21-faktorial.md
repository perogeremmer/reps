---
title: "Hitung Faktorial (!)"
description: "Latihan matematika klasik menggunakan loop perkalian. Sering muncul di tes teknikal."
level: "Level 2: Looping & Array"
topik: "Matematika & Loop"
pubDate: 2026-02-20
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungFaktorial

  INPUT n_string
  N = PARSE(n_string)
  hasil = 1

  -- Mulai dari N
  i = N
  
  -- Loop mundur sampai 1
  WHILE i >= 1 DO
      hasil = hasil * i
      i = i - 1
  END WHILE

  PRINT "Hasil " + N + "! adalah: " + hasil

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima angka N
  2. **Inisialisasi**: Set hasil = 1 (bukan 0, karena perkalian)
  3. **Loop mundur**: Iterasi dari N ke 1
  4. **Multiply**: Kalikan hasil dengan i setiap iterasi
  5. **Output**: Tampilkan hasil faktorial

  ### Contoh Perhitungan:
  - 5! = 5 × 4 × 3 × 2 × 1 = 120
  - 0! = 1 (definisi matematika)

  ## Variasi

  Coba modifikasi untuk:
  - Handle kasus N = 0 (hasilnya 1)
  - Validasi input (N harus >= 0)
  - Hitung kombinasi C(n, r) menggunakan faktorial
  - Implementasi dengan WHILE loop
---

## 📝 Problem

Dalam matematika, faktorial dari 5 (ditulis 5!) adalah hasil perkalian `5 * 4 * 3 * 2 * 1`.
Buatlah program yang menerima input angka bulat positif, dan menghitung hasil faktorialnya.

### Input
Angka `N`.

### Output
Hasil faktorial.

### Contoh

| Input | Output                        |
|-------|-------------------------------|
| 5     | Hasil 5! adalah: 120          |
| 3     | Hasil 3! adalah: 6            |
| 0     | Hasil 0! adalah: 1            |

## 💡 Tips

> Inisialisasi variabel hasil dengan 1 (bukan 0) untuk operasi perkalian. Kalau diinisialisasi 0, hasilnya akan selalu 0.
