---
title: "Faktorial Bilangan"
description: "Latihan menggunakan perulangan untuk menghitung faktorial suatu bilangan (n!)."
level: "Level 2: Menengah"
topik: "Perulangan (Loop)"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungFaktorial

  INPUT n

  IF n < 0 THEN
      OUTPUT "Faktorial tidak terdefinisi untuk bilangan negatif"
  ELSE IF n == 0 OR n == 1 THEN
      OUTPUT "1"
  ELSE
      faktorial = 1
      i = 2
      
      WHILE i <= n DO
          faktorial = faktorial * i
          i = i + 1
      END WHILE
      
      OUTPUT faktorial
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Validasi**: Cek jika n negatif (tidak valid)
  2. **Base case**: 0! = 1 dan 1! = 1
  3. **Inisialisasi**: faktorial = 1, mulai dari 2
  4. **Loop**: Kalikan faktorial dengan i dari 2 sampai n
  5. **Output**: Tampilkan hasil faktorial

  ## Variasi

  Coba modifikasi untuk:
  - Hitung faktorial dengan perulangan mundur (n sampai 1)
  - Tampilkan proses perhitungan (5! = 5 × 4 × 3 × 2 × 1)
  - Hitung kombinasi dan permutasi menggunakan faktorial
  - Cek batas maksimal (faktorial untuk n > 20 akan overflow)
---

## 📝 Problem

Buatlah algoritma untuk menghitung faktorial dari sebuah bilangan bulat non-negatif.

**Definisi Faktorial:**
- n! = n × (n-1) × (n-2) × ... × 2 × 1
- 0! = 1 (definisi khusus)
- 1! = 1

Contoh: 5! = 5 × 4 × 3 × 2 × 1 = 120

### Input
- `n`: Bilangan bulat non-negatif

### Output
- Hasil faktorial dari n

### Contoh

| Input | Output |
|-------|--------|
| 5     | 120    |
| 3     | 6      |
| 0     | 1      |
| 1     | 1      |
| 7     | 5040   |

## 💡 Tips

> Mulai dari 1, lalu kalikan dengan setiap angka dari 2 sampai n. Gunakan variabel untuk menyimpan hasil sementara. Hati-hati dengan bilangan besar, faktorial 20 sudah mencapai 2.4 juta triliun!
