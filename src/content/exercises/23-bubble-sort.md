---
title: "Bubble Sort"
description: "Latihan algoritma sorting sederhana untuk mengurutkan array dari kecil ke besar menggunakan Bubble Sort."
level: "Level 3: Lanjutan"
topik: "Sorting Algorithm"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA BubbleSort

  INPUT n

  -- Input array
  DECLARE arr[n]
  i = 0
  WHILE i < n DO
      INPUT arr[i]
      i = i + 1
  END WHILE

  -- Bubble Sort
  i = 0
  WHILE i < n - 1 DO
      j = 0
      WHILE j < n - 1 - i DO
          IF arr[j] > arr[j + 1] THEN
              -- Tukar elemen
              temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
          END IF
          j = j + 1
      END WHILE
      i = i + 1
  END WHILE

  -- Tampilkan hasil
  PRINT "Array setelah diurutkan:"
  i = 0
  WHILE i < n DO
      PRINT arr[i] + " "
      i = i + 1
  END WHILE

  END ALGORITMA
  ```

  ## Penjelasan

  **Bubble Sort Principle:**
  - Bandingkan elemen bersebelahan
  - Tukar jika urutannya salah (kiri > kanan)
  - Ulangi sampai seluruh array terurut
  - Elemen terbesar "menggelembung" ke posisi paling kanan

  1. **Outer loop**: Lakukan n-1 kali iterasi
  2. **Inner loop**: Bandingkan elemen bersebelahan
  3. **Swap**: Tukar posisi jika elemen kiri lebih besar
  4. **Optimize**: Inner loop semakin pendek setiap iterasi
  5. **Output**: Tampilkan array yang sudah terurut

  ## Variasi

  Coba modifikasi untuk:
  - Urutkan dari besar ke kecil (descending)
  - Optimasi dengan menambahkan flag swapped (henti jika sudah terurut)
  - Implementasi Selection Sort atau Insertion Sort
  - Cari median dari array yang sudah terurut
  - Implementasi Merge Sort (untuk level expert)
---

## 📝 Problem

Buatlah algoritma Bubble Sort untuk mengurutkan array angka dari kecil ke besar (ascending).

**Bubble Sort:** Algoritma sorting yang bekerja dengan cara membandingkan dan menukar elemen bersebelahan berulang kali sampai array terurut.

### Input
- `n`: Jumlah elemen array
- `arr`: Elemen-elemen array (diinput satu per satu)

### Output
- Array yang sudah diurutkan dari kecil ke besar

### Contoh

**Input:**
```
Jumlah elemen: 5
Elemen 0: 64
Elemen 1: 34
Elemen 2: 25
Elemen 3: 12
Elemen 4: 22
```

**Output:**
```
Array setelah diurutkan:
12 22 25 34 64
```

### Visualisasi Proses:

Pass 1: [64, 34, 25, 12, 22] → [34, 64, 25, 12, 22]
        [34, 64, 25, 12, 22] → [34, 25, 64, 12, 22]
        [34, 25, 64, 12, 22] → [34, 25, 12, 64, 22]
        [34, 25, 12, 64, 22] → [34, 25, 12, 22, 64] ✓

Pass 2: [34, 25, 12, 22, 64] → [25, 34, 12, 22, 64]
        [25, 34, 12, 22, 64] → [25, 12, 34, 22, 64]
        [25, 12, 34, 22, 64] → [25, 12, 22, 34, 64] ✓

...dan seterusnya sampai terurut

## 💡 Tips

> Bubble sort memiliki nested loop. Outer loop berjalan n-1 kali, inner loop berjalan semakin sedikit setiap iterasi (n-1-i). Gunakan variabel temp untuk menukar nilai. Kompleksitas: O(n²).
