---
title: "Hitung Diskon Belanja"
description: "Kombinasi antara manipulasi variabel dan kondisi IF untuk menghitung total harga."
level: "Level 1: Dasar"
topik: "Variabel & Kondisi"
pubDate: 2026-02-17
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungDiskon

  INPUT belanja_string
  total_belanja = PARSE(belanja_string)

  -- Inisialisasi diskon default adalah 0
  diskon = 0

  -- Cek apakah memenuhi syarat diskon
  IF total_belanja >= 100000 THEN
      diskon = 15000
  END IF

  -- Menimpa/menghitung variabel akhir
  total_bayar = total_belanja - diskon

  PRINT "Total yang harus Anda bayar: Rp " + total_bayar

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima total belanja dari user
  2. **Inisialisasi**: Set diskon = 0 (default tidak ada diskon)
  3. **Cek syarat**: Jika belanja >= 100.000, beri diskon 15.000
  4. **Hitung akhir**: Total bayar = Total belanja - Diskon
  5. **Output**: Tampilkan total yang harus dibayar

  ## Variasi

  Coba modifikasi untuk:
  - Diskon bertingkat: 10k untuk belanja >50k, 20k untuk >150k
  - Cek juga apakah pelanggan member (diskon tambahan 5%)
  - Hitung pajak 10% setelah diskon
---

## 📝 Problem

Sebuah minimarket memberikan diskon potongan harga sebesar Rp 15.000, tapi **hanya** jika total belanjaan pelanggan mencapai minimal Rp 100.000.

Buat logika di mana program menerima input total belanja. Cek apakah total belanja tersebut berhak mendapat diskon. Simpan nilai diskonnya, hitung harga akhirnya dengan mengurangi total belanja dengan diskon, lalu tampilkan total yang harus dibayar.

### Input
Angka mewakili `total_belanja`.

### Output
Total yang harus dibayar setelah dihitung (baik kena diskon ataupun tidak).

### Contoh

| Input   | Output                                        |
|---------|-----------------------------------------------|
| 150000  | Total yang harus Anda bayar: Rp 135000        |
| 80000   | Total yang harus Anda bayar: Rp 80000         |
| 100000  | Total yang harus Anda bayar: Rp 85000         |

## 💡 Tips

> Gunakan pola: inisialisasi variabel dengan nilai default (0), lalu update nilainya jika kondisi terpenuhi. Ini lebih aman daripada langsung assign nilai di dalam IF.
