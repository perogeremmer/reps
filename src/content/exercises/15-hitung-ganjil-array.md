---
title: "Hitung Jumlah Bilangan Ganjil"
description: "Menggabungkan looping, array, dan kondisi (modulo) untuk menghitung frekuensi data tertentu."
level: "Level 2: Looping & Array"
topik: "Logic Filtering"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungGanjil

  data_angka = [12, 5, 7, 20, 9, 2, 15]
  jumlah_ganjil = 0

  FOR EACH angka IN data_angka DO
      -- Cek jika sisa bagi tidak sama dengan 0 (ganjil)
      IF angka % 2 != 0 THEN
          jumlah_ganjil = jumlah_ganjil + 1
      END IF
  END FOR

  PRINT "Ditemukan " + jumlah_ganjil + " angka ganjil."

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set jumlah_ganjil = 0
  2. **Loop**: Iterasi setiap angka dalam array
  3. **Filter**: Cek dengan modulo 2 != 0 untuk ganjil
  4. **Count**: Tambahkan counter jika kondisi terpenuhi
  5. **Output**: Tampilkan jumlah angka ganjil

  ## Variasi

  Coba modifikasi untuk:
  - Hitung jumlah angka genap
  - Hitung jumlah angka yang lebih besar dari 10
  - Hitung jumlah angka negatif dalam array
---

## 📝 Problem

Diberikan sekumpulan angka acak: `[12, 5, 7, 20, 9, 2, 15]`.
Hitung ada berapa banyak angka **ganjil** di dalam kumpulan data tersebut.

### Input
Array Angka.

### Output
Jumlah (count) angka ganjil.

### Contoh

| Input                    | Output                           |
|--------------------------|----------------------------------|
| [12, 5, 7, 20, 9, 2, 15] | Ditemukan 4 angka ganjil.        |
| [1, 3, 5, 7]             | Ditemukan 4 angka ganjil.        |
| [2, 4, 6, 8]             | Ditemukan 0 angka ganjil.        |

## 💡 Tips

> Kombinasi "Loop + Kondisi + Counter" adalah pola umum untuk filtering dan counting data dalam array.
