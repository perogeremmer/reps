---
title: "Linear Search"
description: "Latihan algoritma pencarian sederhana untuk mencari nilai dalam array dan mengembalikan posisinya."
level: "Level 3: Lanjutan"
topik: "Searching Algorithm"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA LinearSearch

  INPUT n

  -- Input array
  DECLARE arr[n]
  i = 0
  WHILE i < n DO
      INPUT arr[i]
      i = i + 1
  END WHILE

  INPUT target  -- nilai yang dicari

  -- Pencarian
  found = false
  posisi = -1
  i = 0

  WHILE i < n AND found == false DO
      IF arr[i] == target THEN
          found = true
          posisi = i
      END IF
      i = i + 1
  END WHILE

  IF found == true THEN
      PRINT "Nilai " + target + " ditemukan di posisi " + posisi
  ELSE
      PRINT "Nilai " + target + " tidak ditemukan"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input data**: Terima jumlah data dan isi array
  2. **Input target**: Terima nilai yang ingin dicari
  3. **Inisialisasi**: Set found = false, posisi = -1
  4. **Loop**: Cek setiap elemen array satu per satu
  5. **Cocokkan**: Jika elemen sama dengan target, catat posisi dan hentikan
  6. **Output**: Tampilkan hasil pencarian

  ## Variasi

  Coba modifikasi untuk:
  - Hitung berapa kali target muncul dalam array
  - Tampilkan semua posisi jika target muncul beberapa kali
  - Implementasi Binary Search (untuk array yang sudah terurut)
  - Cari nilai terdekat jika target tidak ditemukan
  - Implementasi Jump Search
---

## 📝 Problem

Buatlah algoritma pencarian linear (sequential search) untuk mencari nilai tertentu dalam array dan menampilkan posisinya.

**Linear Search**: Mengecek setiap elemen array satu per satu dari awal sampai akhir (atau sampai nilai ditemukan).

### Input
- `n`: Jumlah elemen array
- `arr`: Elemen-elemen array (diinput satu per satu)
- `target`: Nilai yang ingin dicari

### Output
- Posisi/index nilai yang ditemukan, atau pesan "tidak ditemukan"

### Contoh

**Input:**
```
Jumlah elemen: 5
Elemen 0: 10
Elemen 1: 25
Elemen 2: 30
Elemen 3: 15
Elemen 4: 40
Nilai yang dicari: 30
```

**Output:**
```
Nilai 30 ditemukan di posisi 2
```

**Contoh jika tidak ditemukan:**
```
Nilai 100 tidak ditemukan
```

## 💡 Tips

> Linear search cocok untuk array kecil atau array yang belum terurut. Kompleksitasnya O(n) - paling burus harus cek semua elemen. Gunakan flag untuk menandai apakah nilai sudah ditemukan.
