---
title: "Hitung Rata-rata Nilai"
description: "Latihan menggunakan perulangan (loop) untuk menghitung rata-rata dari beberapa nilai yang diinput user."
level: "Level 2: Menengah"
topik: "Perulangan (Loop)"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungRataRata

  INPUT jumlah_siswa
  
  total_nilai = 0
  counter = 1

  WHILE counter <= jumlah_siswa DO
      INPUT nilai
      total_nilai = total_nilai + nilai
      counter = counter + 1
  END WHILE

  rata_rata = total_nilai / jumlah_siswa

  PRINT "Total nilai: " + total_nilai
  PRINT "Rata-rata nilai: " + rata_rata

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input jumlah**: Tanya berapa banyak nilai yang akan diinput
  2. **Inisialisasi**: Set total_nilai = 0 dan counter = 1
  3. **Loop**: Ulangi sebanyak jumlah_siswa kali
  4. **Akumulasi**: Tambahkan setiap nilai ke total_nilai
  5. **Hitung rata-rata**: Bagi total dengan jumlah siswa
  6. **Output**: Tampilkan total dan rata-rata

  ## Variasi

  Coba modifikasi untuk:
  - Hitung nilai tertinggi dan terendah juga
  - Tentukan grade kelas berdasarkan rata-rata
  - Tampilkan berapa siswa yang lulus (nilai >= 75)
  - Simpan semua nilai dalam array/list
---

## 📝 Problem

Buatlah algoritma untuk menghitung rata-rata nilai dari sejumlah siswa. Program akan meminta input jumlah siswa terlebih dahulu, kemudian meminta nilai masing-masing siswa satu per satu.

### Input
- `jumlah_siswa`: Banyaknya siswa
- `nilai`: Nilai tiap siswa (diinput berulang kali sesuai jumlah siswa)

### Output
- Total nilai seluruh siswa
- Rata-rata nilai

### Contoh

**Input:**
```
Jumlah siswa: 3
Nilai siswa 1: 80
Nilai siswa 2: 90
Nilai siswa 3: 85
```

**Output:**
```
Total nilai: 255
Rata-rata nilai: 85
```

## 💡 Tips

> Gunakan variabel counter untuk mengontrol perulangan. Variabel total_nilai harus diinisialisasi dengan 0 sebelum loop dimulai. Pastikan counter bertambah di dalam loop agar tidak infinite loop!
