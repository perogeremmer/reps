---
title: "Hitung Jarak Tempuh"
description: "Latihan dasar menggunakan rumus matematika untuk menghitung jarak tempuh kendaraan berdasarkan kecepatan dan waktu."
level: "Level 1: Dasar"
topik: "Variabel & Matematika"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungJarak

  INPUT kecepatan
  INPUT waktu

  jarak = kecepatan * waktu

  PRINT "Jarak tempuh adalah: " + jarak + " km"

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima kecepatan (km/jam) dan waktu (jam)
  2. **Rumus**: Jarak = Kecepatan × Waktu
  3. **Hitung**: Kalikan kedua nilai input
  4. **Output**: Tampilkan hasil perhitungan jarak

  ## Variasi

  Coba modifikasi algoritma untuk:
  - Hitung waktu tempuh jika jarak dan kecepatan diketahui
  - Hitung kecepatan rata-rata jika jarak dan waktu diketahui
  - Tambahkan konversi waktu dari menit ke jam
  - Hitung biaya bensin berdasarkan jarak dan konsumsi BBM
---

## 📝 Problem

Buatlah algoritma untuk menghitung jarak tempuh sebuah kendaraan berdasarkan kecepatan dan waktu perjalanan.

### Input
- `kecepatan`: Kecepatan kendaraan (km/jam)
- `waktu`: Waktu perjalanan (jam)

### Output
- Jarak tempuh dalam kilometer

### Rumus
```
Jarak = Kecepatan × Waktu
```

### Contoh

| Kecepatan | Waktu | Output                        |
|-----------|-------|-------------------------------|
| 60        | 2     | Jarak tempuh adalah: 120 km   |
| 80        | 1.5   | Jarak tempuh adalah: 120 km   |
| 40        | 3     | Jarak tempuh adalah: 120 km   |
| 100       | 0.5   | Jarak tempuh adalah: 50 km    |

## 💡 Tips

> Pastikan input waktu dalam satuan jam. Jika user input dalam menit, konversi dulu dengan membagi 60.
