---
title: "Cari Nilai Tertinggi (Max)"
description: "Latihan iterasi array untuk mencari nilai terbesar. Ini logika dasar algoritma pencarian."
level: "Level 2: Looping & Array"
topik: "Array & Loop"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA CariNilaiMax

  nilai_siswa = [45, 70, 89, 60, 92, 55]

  -- Anggap elemen pertama adalah juara bertahan (max)
  max_nilai = nilai_siswa[0]

  -- Loop dari elemen kedua sampai akhir
  FOR EACH nilai IN nilai_siswa DO
      -- Jika ketemu nilai yang lebih besar dari juara bertahan
      IF nilai > max_nilai THEN
          -- Update juara bertahan
          max_nilai = nilai
      END IF
  END FOR

  PRINT "Nilai tertinggi adalah: " + max_nilai

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Anggap elemen pertama sebagai nilai maksimum
  2. **Loop**: Iterasi setiap elemen dalam array
  3. **Bandingkan**: Jika elemen > max_nilai, update max_nilai
  4. **Output**: Tampilkan nilai tertinggi

  ## Variasi

  Coba modifikasi untuk:
  - Cari nilai minimum (terendah)
  - Cari nilai rata-rata
  - Temukan posisi/index nilai tertinggi
---

## 📝 Problem

Kamu diberikan sebuah data nilai siswa dalam bentuk Array: `[45, 70, 89, 60, 92, 55]`.

Buatlah logika untuk memeriksa satu per satu nilai di dalam array tersebut dan temukan nilai yang paling besar.

*Strategi:* Anggap nilai pertama adalah nilai terbesar sementara, lalu bandingkan dengan nilai berikutnya.

### Input
Array Nilai (sudah ditentukan).

### Output
Angka terbesar dalam array.

### Contoh

| Input                      | Output                        |
|----------------------------|-------------------------------|
| [45, 70, 89, 60, 92, 55]   | Nilai tertinggi adalah: 92    |
| [10, 20, 30]               | Nilai tertinggi adalah: 30    |
| [100, 50, 25]              | Nilai tertinggi adalah: 100   |

## 💡 Tips

> Selalu inisialisasi max/min dengan elemen pertama array, bukan dengan 0 atau angka arbitrary. Ini penting untuk menangani kasus array dengan nilai negatif.
