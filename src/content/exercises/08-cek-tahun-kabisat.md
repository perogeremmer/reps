---
title: "Cek Tahun Kabisat"
description: "Latihan menggunakan kondisional dengan multiple conditions untuk menentukan apakah suatu tahun adalah tahun kabisat."
level: "Level 1: Dasar"
topik: "Kondisi (If-Else)"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA CekTahunKabisat

  INPUT tahun

  IF tahun % 4 == 0 THEN
      IF tahun % 100 == 0 THEN
          IF tahun % 400 == 0 THEN
              OUTPUT "Tahun Kabisat"
          ELSE
              OUTPUT "Bukan Tahun Kabisat"
          END IF
      ELSE
          OUTPUT "Tahun Kabisat"
      END IF
  ELSE
      OUTPUT "Bukan Tahun Kabisat"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  Aturan tahun kabisat:
  1. Jika tahun habis dibagi 4, lanjut cek
  2. Jika juga habis dibagi 100, lanjut cek lagi
  3. Jika juga habis dibagi 400, maka tahun kabisat
  4. Jika habis dibagi 4 tapi tidak habis dibagi 100, tahun kabisat
  5. Selain itu, bukan tahun kabisat

  ## Variasi

  Coba modifikasi untuk:
  - Cek rentang tahun (1900-2100) dan hitung berapa tahun kabisat
  - Tampilkan semua tahun kabisat dalam 1 dekade terakhir
  - Buat kalender sederhana yang menandai tahun kabisat
---

## 📝 Problem

Buatlah algoritma untuk menentukan apakah suatu tahun adalah tahun kabisat.

**Aturan Tahun Kabisat:**
- Tahun habis dibagi 4 = Kandidat tahun kabisat
- Tapi jika habis dibagi 100, harus cek lagi
- Jika juga habis dibagi 400, maka tahun kabisat
- Contoh: 2000 (kabisat), 1900 (bukan), 2024 (kabisat), 2023 (bukan)

### Input
- Sebuah angka mewakili tahun (`tahun`)

### Output
- "Tahun Kabisat" atau "Bukan Tahun Kabisat"

### Contoh

| Input | Output                |
|-------|----------------------|
| 2024  | Tahun Kabisat        |
| 2023  | Bukan Tahun Kabisat  |
| 2000  | Tahun Kabisat        |
| 1900  | Bukan Tahun Kabisat  |
| 2020  | Tahun Kabisat        |

## 💡 Tips

> Tahun kabisat memiliki 366 hari (29 Februari ada). Gunakan operator modulo (`%`) untuk cek kelipatan. Perhatikan bahwa tahun yang habis dibagi 100 TIDAK otomatis kabisat, kecuali juga habis dibagi 400.
