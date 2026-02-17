---
title: "Cek Ganjil atau Genap"
description: "Latihan dasar untuk memahami kondisional (if-else) dengan menentukan apakah sebuah angka ganjil atau genap."
level: "Level 1: Dasar"
topik: "Kondisi (If-Else)"
pubDate: 2026-02-15
solution: |
  ## Pseudocode

  ```
  ALGORITMA CekGanjilGenap

  INPUT n

  IF n % 2 == 0 THEN
      OUTPUT "Genap"
  ELSE
      OUTPUT "Ganjil"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima bilangan bulat `n` dari user
  2. **Cek kondisi**: Gunakan operasi modulo `n % 2` untuk mendapatkan sisa pembagian `n` dengan 2
  3. **Keputusan**: 
     - Jika sisa = 0, maka `n` genap
     - Jika sisa ≠ 0, maka `n` ganjil
  4. **Output**: Tampilkan hasil sesuai kondisi

  ## Variasi

  Coba modifikasi algoritma untuk:
  - Menerima 3 bilangan sekaligus dan menampilkan status masing-masing
  - Menghitung jumlah bilangan genap dalam rentang 1 sampai `n`
---

## 📝 Problem

Buatlah sebuah algoritma yang dapat menentukan apakah sebuah bilangan bulat adalah **ganjil** atau **genap**.

### Input
- Sebuah bilangan bulat `n`

### Output
- Tuliskan "Genap" jika `n` habis dibagi 2
- Tuliskan "Ganjil" jika `n` tidak habis dibagi 2

### Contoh

| Input | Output |
|-------|--------|
| 4     | Genap  |
| 7     | Ganjil |
| 0     | Genap  |
| -3    | Ganjil |

## 💡 Tips

> Gunakan operator modulo (`%`) untuk mengecek sisa pembagian. Jika `n % 2 == 0`, maka bilangan tersebut genap.
