---
title: "Cek Angka Positif Negatif"
description: "Latihan kondisional sederhana untuk menentukan apakah angka positif, negatif, atau nol."
level: "Level 1: Dasar"
topik: "Kondisi (If-Else)"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA CekPositifNegatif

  INPUT angka

  IF angka > 0 THEN
      OUTPUT "Positif"
  ELSE IF angka < 0 THEN
      OUTPUT "Negatif"
  ELSE
      OUTPUT "Nol"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima sebuah bilangan
  2. **Cek positif**: Jika angka > 0, output "Positif"
  3. **Cek negatif**: Jika angka < 0, output "Negatif"
  4. **Cek nol**: Jika bukan keduanya (angka = 0), output "Nol"

  ## Variasi

  Coba modifikasi algoritma untuk:
  - Cek juga apakah bilangan genap atau ganjil
  - Cek rentang angka (1-100, di luar rentang, dll)
  - Buat kalkulator yang hanya menerima input positif
  - Tampilkan pesan berbeda untuk angka besar (>1000)
---

## 📝 Problem

Buatlah algoritma yang menerima input angka dan menentukan apakah angka tersebut positif, negatif, atau nol.

### Input
- `angka`: Sebuah bilangan bulat atau desimal

### Output
- "Positif" jika angka > 0
- "Negatif" jika angka < 0
- "Nol" jika angka = 0

### Contoh

| Input | Output    |
|-------|-----------|
| 10    | Positif   |
| -5    | Negatif   |
| 0     | Nol       |
| 3.14  | Positif   |
| -100  | Negatif   |

## 💡 Tips

> Gunakan struktur IF-ELSE IF-ELSE untuk mengecek tiga kondisi berbeda. Urutan pengecekan tidak terlalu penting karena ketiga kondisi saling eksklusif (tidak mungkin terjadi bersamaan).
