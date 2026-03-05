---
title: "Deret Fibonacci"
description: "Latihan menggunakan perulangan untuk menghasilkan deret Fibonacci sebanyak n suku pertama."
level: "Level 2: Menengah"
topik: "Perulangan (Loop)"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA DeretFibonacci

  INPUT n

  IF n <= 0 THEN
      OUTPUT "Jumlah suku harus lebih dari 0"
  ELSE IF n == 1 THEN
      OUTPUT "0"
  ELSE
      a = 0
      b = 1
      
      PRINT a + " "  -- suku pertama
      PRINT b + " "  -- suku kedua
      
      counter = 2
      WHILE counter < n DO
          c = a + b
          PRINT c + " "
          a = b
          b = c
          counter = counter + 1
      END WHILE
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  **Deret Fibonacci** - 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
  - Setiap suku adalah jumlah dua suku sebelumnya
  - Suku 1 = 0, Suku 2 = 1
  - Suku 3 = 0+1 = 1, Suku 4 = 1+1 = 2, dst

  1. **Inisialisasi**: Mulai dengan a=0, b=1
  2. **Tampilkan**: Cetak dua suku pertama
  3. **Loop**: Hitung suku berikutnya (c = a + b)
  4. **Update**: Geser nilai (a = b, b = c)
  5. **Ulangi**: Sampai mencapai n suku

  ## Variasi

  Coba modifikasi untuk:
  - Tampilkan hanya suku ke-n saja (bukan seluruh deret)
  - Hitung jumlah total n suku pertama
  - Cari suku Fibonacci terbesar yang masih < 1000
  - Cek apakah suatu angka adalah bilangan Fibonacci
  - Gunakan rekursi (untuk level lanjut)
---

## 📝 Problem

Buatlah algoritma untuk menampilkan deret Fibonacci sebanyak n suku pertama.

**Deret Fibonacci:**
Setiap suku adalah jumlah dua suku sebelumnya.
Contoh: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

### Input
- `n`: Jumlah suku yang ingin ditampilkan

### Output
- Deret Fibonacci sebanyak n suku

### Contoh

| Input | Output                    |
|-------|---------------------------|
| 5     | 0 1 1 2 3                 |
| 8     | 0 1 1 2 3 5 8 13          |
| 1     | 0                         |
| 2     | 0 1                       |
| 10    | 0 1 1 2 3 5 8 13 21 34    |

## 💡 Tips

> Gunakan tiga variabel: a (suku sekarang), b (suku berikutnya), dan c (hasil jumlah). Setiap iterasi, update a menjadi b, dan b menjadi c. Ini adalah contoh sliding window yang klasik!
