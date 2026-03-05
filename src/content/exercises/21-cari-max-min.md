---
title: "Cari Nilai Maksimum dan Minimum"
description: "Latihan menggunakan array/list dan perulangan untuk mencari nilai terbesar dan terkecil dari kumpulan data."
level: "Level 3: Lanjutan"
topik: "Array/List"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA CariMaxMin

  INPUT n  -- jumlah angka

  -- Input semua angka ke dalam array
  DECLARE arr[n]
  i = 0
  WHILE i < n DO
      INPUT arr[i]
      i = i + 1
  END WHILE

  -- Inisialisasi max dan min dengan elemen pertama
  maksimum = arr[0]
  minimum = arr[0]

  -- Cari nilai max dan min
  i = 1
  WHILE i < n DO
      IF arr[i] > maksimum THEN
          maksimum = arr[i]
      END IF
      
      IF arr[i] < minimum THEN
          minimum = arr[i]
      END IF
      
      i = i + 1
  END WHILE

  PRINT "Nilai Maksimum: " + maksimum
  PRINT "Nilai Minimum: " + minimum

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input data**: Terima jumlah data dan nilai-nilainya
  2. **Simpan array**: Simpan semua nilai dalam array/list
  3. **Inisialisasi**: Set max dan min dengan elemen pertama
  4. **Loop**: Bandingkan setiap elemen dengan max dan min saat ini
  5. **Update**: Ganti max/min jika menemukan nilai lebih besar/kecil
  6. **Output**: Tampilkan nilai max dan min

  ## Variasi

  Coba modifikasi untuk:
  - Cari juga posisi/index dari max dan min
  - Hitung selisih antara max dan min
  - Temukan nilai kedua terbesar dan kedua terkecil
  - Cari nilai tengah (median) dari array
  - Hitung standar deviasi/rata-rata
---

## 📝 Problem

Buatlah algoritma untuk mencari nilai maksimum (terbesar) dan minimum (terkecil) dari sekumpulan angka yang diinput user.

### Input
- `n`: Jumlah angka yang akan diinput
- `angka`: n buah angka (diinput satu per satu)

### Output
- Nilai maksimum dari semua angka
- Nilai minimum dari semua angka

### Contoh

**Input:**
```
Jumlah angka: 5
Angka 1: 23
Angka 2: 56
Angka 3: 12
Angka 4: 89
Angka 5: 34
```

**Output:**
```
Nilai Maksimum: 89
Nilai Minimum: 12
```

## 💡 Tips

> Gunakan struktur data array/list untuk menyimpan semua angka. Inisialisasi max dan min dengan angka pertama, lalu bandingkan dengan setiap angka lainnya. Update jika menemukan yang lebih besar/kecil.
