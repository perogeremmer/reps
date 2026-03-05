---
title: "Hitung Rata-Rata Nilai"
description: "Menggabungkan logika akumulasi (penjumlahan) dan pembagian untuk mencari nilai rata-rata (mean)."
level: "Level 2: Looping & Array"
topik: "Matematika & Array"
pubDate: 2026-02-20
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungRataRata

  nilai_kelas = [80, 90, 75, 60, 85]
  total_nilai = 0
  jumlah_siswa = 5 -- atau LENGTH(nilai_kelas)

  -- Langkah 1: Jumlahkan semua
  FOR EACH nilai IN nilai_kelas DO
      total_nilai = total_nilai + nilai
  END FOR

  -- Langkah 2: Bagi dengan jumlah data
  rata_rata = total_nilai / jumlah_siswa

  PRINT "Rata-rata kelas adalah: " + rata_rata

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set total_nilai = 0
  2. **Accumulate**: Jumlahkan semua nilai dalam array
  3. **Hitung**: Bagi total dengan jumlah siswa
  4. **Output**: Tampilkan rata-rata

  ## Variasi

  Coba modifikasi untuk:
  - Hitung nilai tertinggi, terendah, dan rata-rata sekaligus
  - Tentukan grade kelas berdasarkan rata-rata
  - Hitung median (nilai tengah setelah diurutkan)
---

## 📝 Problem

Diberikan sekumpulan nilai ujian dalam array: `[80, 90, 75, 60, 85]`.
Hitunglah nilai rata-rata kelas tersebut.

*Rumus:* Rata-rata = (Jumlah Semua Nilai) / (Banyaknya Data).

### Input
Array Nilai.

### Output
Nilai rata-rata.

### Contoh

| Input                  | Output                          |
|------------------------|---------------------------------|
| [80, 90, 75, 60, 85]   | Rata-rata kelas adalah: 78      |
| [100, 100, 100]        | Rata-rata kelas adalah: 100     |
| [50, 60, 70]           | Rata-rata kelas adalah: 60      |

## 💡 Tips

> Kombinasi akumulasi (loop untuk menjumlahkan) dan operasi matematika sederhana (pembagian) adalah pola dasar untuk banyak perhitungan statistik.
