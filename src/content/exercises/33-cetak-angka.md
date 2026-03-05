---
title: "Cetak Angka Berurutan"
description: "Latihan dasar perulangan (looping) untuk mencetak urutan angka dari 1 sampai N."
level: "Level 2: Looping & Array"
topik: "Basic Looping (For)"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA CetakAngka

  INPUT n_string
  N = PARSE(n_string)

  -- Lakukan perulangan dari i = 1 sampai N
  FOR i = 1 TO N DO
      PRINT i
  END FOR

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima angka N dari user
  2. **Loop**: Gunakan FOR loop dari 1 sampai N
  3. **Output**: Cetak nilai i setiap iterasi

  ## Variasi

  Coba modifikasi untuk:
  - Cetak dari N ke 1 (mundur)
  - Cetak hanya angka genap
  - Cetak dengan format "Angka ke-i: [nilai]"
---

## 📝 Problem

Buatlah program yang meminta input sebuah angka bulat positif `N`. Program kemudian harus mencetak angka dari 1 sampai dengan `N` secara berurutan.

*Contoh:* Jika input N = 5, outputnya: 1, 2, 3, 4, 5.

### Input
Angka `N`.

### Output
Deretan angka dari 1 ke N.

### Contoh

| Input | Output           |
|-------|------------------|
| 5     | 1, 2, 3, 4, 5    |
| 3     | 1, 2, 3          |
| 1     | 1                |

## 💡 Tips

> FOR loop cocok digunakan ketika kita sudah tahu berapa kali perulangan akan dilakukan (dari 1 sampai N).
