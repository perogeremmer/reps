---
title: "Konversi Suhu"
description: "Latihan dasar untuk mengkonversi suhu dari Celcius ke Fahrenheit menggunakan rumus matematika sederhana."
level: "Level 1: Dasar"
topik: "Variabel & Matematika"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA KonversiSuhu

  INPUT suhu_celcius

  -- Rumus: F = (C × 9/5) + 32
  suhu_fahrenheit = (suhu_celcius * 9 / 5) + 32

  PRINT "Suhu dalam Fahrenheit: " + suhu_fahrenheit

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima suhu dalam Celcius dari user
  2. **Konversi**: Gunakan rumus F = (C × 9/5) + 32
  3. **Simpan hasil**: Simpan hasil konversi ke variabel baru
  4. **Output**: Tampilkan suhu dalam Fahrenheit

  ## Variasi

  Coba modifikasi algoritma untuk:
  - Konversi dari Fahrenheit ke Celcius
  - Konversi ke Kelvin (K = C + 273.15)
  - Buat kalkulator suhu dengan menu pilihan konversi
---

## 📝 Problem

Buatlah algoritma untuk mengkonversi suhu dari Celcius ke Fahrenheit.

### Input
- Sebuah angka mewakili suhu dalam Celcius (`suhu_celcius`)

### Output
- Suhu yang sudah dikonversi ke Fahrenheit

### Rumus
```
Fahrenheit = (Celcius × 9/5) + 32
```

### Contoh

| Input | Output                           |
|-------|----------------------------------|
| 0     | Suhu dalam Fahrenheit: 32        |
| 100   | Suhu dalam Fahrenheit: 212       |
| 37    | Suhu dalam Fahrenheit: 98.6      |
| -40   | Suhu dalam Fahrenheit: -40       |

## 💡 Tips

> Perhatikan urutan operasi matematika. Gunakan tanda kurung jika perlu untuk memastikan perhitungan dilakukan dengan benar.
