---
title: "Konversi Suhu Sederhana"
description: "Latihan menerapkan rumus matematika untuk mengubah input suhu dari Celcius ke Fahrenheit."
level: "Level 1: Dasar"
topik: "Matematika & Variabel"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA KonversiSuhu

  INPUT celcius_string
  celcius = PARSE(celcius_string)

  -- Hitung menggunakan rumus
  fahrenheit = (celcius * 9/5) + 32

  PRINT celcius + " Celcius sama dengan " + fahrenheit + " Fahrenheit"

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima suhu dalam Celcius dari user
  2. **Proses**: Gunakan rumus konversi `(Celcius * 9/5) + 32`
  3. **Output**: Tampilkan hasil konversi ke Fahrenheit

  ## Variasi

  Coba modifikasi untuk:
  - Konversi Fahrenheit ke Celcius (rumus: `(F - 32) * 5/9`)
  - Konversi ke Kelvin (Celcius + 273.15)
  - Buat menu pilihan konversi
---

## 📝 Problem

Buatlah program konversi suhu sederhana. Program meminta input suhu dalam satuan Celcius dari pengguna, kemudian menghitung dan menampilkan suhu tersebut dalam satuan Fahrenheit.

**Rumus:** `Fahrenheit = (Celcius * 9/5) + 32`

### Input
Angka suhu (Celcius).

### Output
Angka suhu (Fahrenheit).

### Contoh

| Input | Output                                      |
|-------|---------------------------------------------|
| 0     | 0 Celcius sama dengan 32 Fahrenheit         |
| 100   | 100 Celcius sama dengan 212 Fahrenheit      |
| 37    | 37 Celcius sama dengan 98.6 Fahrenheit      |

## 💡 Tips

> Perhatikan urutan operasi matematika. Gunakan tanda kurung untuk memastikan operasi perkalian dilakukan terlebih dahulu sebelum penjumlahan.
