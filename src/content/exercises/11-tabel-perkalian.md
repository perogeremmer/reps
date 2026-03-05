---
title: "Tabel Perkalian"
description: "Latihan menggunakan nested loop (loop dalam loop) untuk membuat tabel perkalian sederhana."
level: "Level 2: Menengah"
topik: "Perulangan Bersarang"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA TabelPerkalian

  INPUT n

  i = 1
  WHILE i <= n DO
      j = 1
      WHILE j <= n DO
          hasil = i * j
          PRINT i + " x " + j + " = " + hasil
          j = j + 1
      END WHILE
      PRINT "---"  -- pemisah per baris
      i = i + 1
  END WHILE

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima angka n untuk ukuran tabel
  2. **Outer loop** (i): Loop untuk baris (1 sampai n)
  3. **Inner loop** (j): Loop untuk kolom (1 sampai n)
  4. **Hitung**: Kalikan i dengan j
  5. **Output**: Tampilkan hasil perkalian
  6. **Pemisah**: Tambahkan pemisah setelah setiap baris selesai

  ## Variasi

  Coba modifikasi untuk:
  - Buat tabel perkalian dalam format grid/matrix
  - Tampilkan hanya perkalian bilangan ganjil
  - Buat tabel penjumlahan atau pengurangan
  - Tampilkan hanya diagonal tabel (i == j)
---

## 📝 Problem

Buatlah algoritma untuk membuat tabel perkalian dari 1 sampai n. Program akan menampilkan semua hasil perkalian dari 1×1 sampai n×n.

### Input
- `n`: Angka maksimal untuk tabel perkalian

### Output
- Tabel perkalian lengkap dari 1 sampai n

### Contoh (n = 3)

**Output:**
```
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
---
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
---
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
---
```

## 💡 Tips

> Nested loop berarti ada loop di dalam loop. Loop luar (outer) mengontrol baris, loop dalam (inner) mengontrol kolom. Pastikan variabel counter untuk inner loop direset di awal outer loop!
