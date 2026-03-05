---
title: "Konversi Menit ke Jam"
description: "Latihan menggunakan operator pembagian dan modulo (sisa bagi) untuk memecah satuan waktu."
level: "Level 1: Dasar"
topik: "Matematika (Modulo)"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA KonversiWaktu

  INPUT menit_string
  total_menit = PARSE(menit_string)

  -- Hitung jam (pembagian bulat)
  jam = total_menit / 60

  -- Hitung sisa menit (modulo)
  sisa_menit = total_menit % 60

  PRINT total_menit + " menit sama dengan " + jam + " Jam " + sisa_menit + " Menit"

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima total menit dari user
  2. **Hitung jam**: Bagi total menit dengan 60 (pembagian bulat)
  3. **Hitung sisa**: Gunakan modulo (%) untuk mendapat sisa menit
  4. **Output**: Tampilkan dalam format "X Jam Y Menit"

  ## Variasi

  Coba modifikasi untuk:
  - Konversi detik ke "Jam:Menit:Detik"
  - Konversi hari ke "Minggu dan Hari"
  - Format output dengan leading zero (02:05)
---

## 📝 Problem

Program menerima input berupa total menit (misal: 130 menit). Tugasmu adalah mengubahnya menjadi format "Jam dan Menit".

*Contoh:* 130 menit = 2 Jam 10 Menit.
*Petunjuk:* Gunakan pembagian untuk mendapatkan jam, dan modulo (`%`) untuk mendapatkan sisa menit.

### Input
Angka `total_menit`.

### Output
Teks format "X Jam Y Menit".

### Contoh

| Input | Output                                  |
|-------|-----------------------------------------|
| 130   | 130 menit sama dengan 2 Jam 10 Menit    |
| 60    | 60 menit sama dengan 1 Jam 0 Menit      |
| 45    | 45 menit sama dengan 0 Jam 45 Menit     |
| 200   | 200 menit sama dengan 3 Jam 20 Menit    |

## 💡 Tips

> Operator modulo (`%`) mengembalikan sisa hasil pembagian. Contoh: `130 % 60 = 10` karena 130 = 2 × 60 + 10.
