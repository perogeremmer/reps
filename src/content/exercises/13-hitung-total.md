---
title: "Hitung Total Deret (Accumulator)"
description: "Pola paling penting dalam programming: menjumlahkan nilai secara bertahap di dalam loop."
level: "Level 2: Looping & Array"
topik: "Looping & Aritmatika"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungTotalDeret

  INPUT n_string
  N = PARSE(n_string)
  
  total = 0

  FOR i = 1 TO N DO
      -- Tambahkan nilai i ke dalam total yang sudah ada
      total = total + i
  END FOR

  PRINT "Total penjumlahan adalah: " + total

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set total = 0 sebelum loop
  2. **Loop**: Iterasi dari 1 sampai N
  3. **Accumulate**: Tambahkan nilai i ke total setiap iterasi
  4. **Output**: Tampilkan hasil akhir

  ## Variasi

  Coba modifikasi untuk:
  - Hitung total bilangan genap saja
  - Hitung faktorial (1 * 2 * 3 * ... * N)
  - Hitung total kuadrat (1² + 2² + 3² + ... + N²)
---

## 📝 Problem

Program meminta input angka `N`. Hitunglah jumlah total dari 1 sampai `N` (1 + 2 + 3 + ... + N).

*Contoh:* Jika input 4, maka hitungannya 1 + 2 + 3 + 4 = 10.
*Hint:* Kamu butuh variabel penampung (misal: `total`) yang di-update setiap kali loop berjalan.

### Input
Angka `N`.

### Output
Hasil penjumlahan total.

### Contoh

| Input | Output                              |
|-------|-------------------------------------|
| 4     | Total penjumlahan adalah: 10        |
| 5     | Total penjumlahan adalah: 15        |
| 10    | Total penjumlahan adalah: 55        |

## 💡 Tips

> Pola "Accumulator" adalah pola umum: inisialisasi variabel total di luar loop, lalu update di dalam loop dengan `total = total + nilai_baru`.
