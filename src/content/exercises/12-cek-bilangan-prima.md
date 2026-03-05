---
title: "Cek Bilangan Prima"
description: "Latihan menggunakan perulangan dan kondisi untuk mengecek apakah suatu bilangan adalah bilangan prima."
level: "Level 2: Menengah"
topik: "Perulangan & Kondisi"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA CekBilanganPrima

  INPUT n

  IF n <= 1 THEN
      OUTPUT "Bukan Bilangan Prima"
  ELSE IF n == 2 THEN
      OUTPUT "Bilangan Prima"
  ELSE
      is_prima = true
      i = 2
      
      WHILE i < n AND is_prima == true DO
          IF n % i == 0 THEN
              is_prima = false
          END IF
          i = i + 1
      END WHILE

      IF is_prima == true THEN
          OUTPUT "Bilangan Prima"
      ELSE
          OUTPUT "Bukan Bilangan Prima"
      END IF
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Cek kasus khusus**: 1 bukan prima, 2 adalah prima
  2. **Asumsi awal**: Anggap bilangan adalah prima (is_prima = true)
  3. **Loop**: Cek dari 2 sampai n-1
  4. **Cek faktor**: Jika n habis dibagi i, bukan prima
  5. **Stop early**: Berhenti jika sudah menemukan faktor
  6. **Output**: Tampilkan hasil berdasarkan flag is_prima

  ## Variasi

  Coba modifikasi untuk:
  - Tampilkan semua bilangan prima dari 1 sampai n
  - Hitung berapa banyak bilangan prima dalam rentang tertentu
  - Optimasi: cek hanya sampai akar kuadrat dari n
  - Faktorisasi prima (tampilkan faktor-faktor primanya)
---

## 📝 Problem

Buatlah algoritma untuk mengecek apakah suatu bilangan adalah bilangan prima.

**Definisi Bilangan Prima:** Bilangan asli lebih besar dari 1 yang hanya memiliki 2 faktor: 1 dan dirinya sendiri.

Contoh: 2, 3, 5, 7, 11, 13 adalah bilangan prima.
Contoh bukan: 4 (bisa dibagi 2), 6 (bisa dibagi 2 dan 3), 1 (hanya punya 1 faktor).

### Input
- `n`: Sebuah bilangan bulat

### Output
- "Bilangan Prima" atau "Bukan Bilangan Prima"

### Contoh

| Input | Output                |
|-------|----------------------|
| 7     | Bilangan Prima       |
| 10    | Bukan Bilangan Prima |
| 2     | Bilangan Prima       |
| 1     | Bukan Bilangan Prima |
| 13    | Bilangan Prima       |

## 💡 Tips

> Gunakan flag (variabel boolean) untuk menandai status prima. Loop dari 2 sampai n-1 dan cek apakah ada yang bisa membagi n. Jika ada, set flag menjadi false dan hentikan loop (tidak perlu cek lagi).
