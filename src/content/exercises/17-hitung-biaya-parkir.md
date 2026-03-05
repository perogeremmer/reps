---
title: "Hitung Biaya Parkir"
description: "Latihan kondisional dengan perhitungan bertingkat untuk menghitung biaya parkir berdasarkan durasi."
level: "Level 1: Dasar"
topik: "Kondisi Bertingkat"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA HitungBiayaParkir

  INPUT durasi  -- dalam jam

  IF durasi <= 1 THEN
      biaya = 5000
  ELSE IF durasi <= 3 THEN
      biaya = 5000 + (durasi - 1) * 3000
  ELSE IF durasi <= 5 THEN
      biaya = 5000 + 6000 + (durasi - 3) * 2000
  ELSE
      biaya = 15000  -- tarif maksimal
  END IF

  PRINT "Biaya parkir: Rp " + biaya

  END ALGORITMA
  ```

  ## Penjelasan

  Aturan biaya parkir:
  - 1 jam pertama: Rp 5.000
  - Jam ke-2 dan ke-3: Rp 3.000/jam
  - Jam ke-4 dan ke-5: Rp 2.000/jam
  - Maksimal 5 jam: Rp 15.000 (flat)

  Contoh: 4 jam = 5000 + 3000 + 3000 + 2000 = Rp 13.000

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan biaya tambahan untuk mobil/motor berbeda
  - Diskon 10% untuk durasi > 3 jam
  - Tarif berbeda untuk hari libur
  - Biaya per 30 menit, bukan per jam
---

## 📝 Problem

Buatlah algoritma untuk menghitung biaya parkir berdasarkan durasi dengan aturan bertingkat.

### Aturan Biaya Parkir:
- **Jam 1**: Rp 5.000 (flat)
- **Jam 2-3**: Rp 3.000/jam
- **Jam 4-5**: Rp 2.000/jam
- **Di atas 5 jam**: Rp 15.000 (tarif maksimal)

### Input
- `durasi`: Lama parkir dalam jam (bilangan bulat)

### Output
- Total biaya parkir

### Contoh

| Durasi | Perhitungan                        | Output                |
|--------|------------------------------------|----------------------|
| 1      | 5000                               | Biaya parkir: Rp 5000 |
| 2      | 5000 + 3000                        | Biaya parkir: Rp 8000 |
| 3      | 5000 + 3000 + 3000                 | Biaya parkir: Rp 11000 |
| 4      | 5000 + 3000 + 3000 + 2000          | Biaya parkir: Rp 13000 |
| 6      | Maksimal                           | Biaya parkir: Rp 15000 |

## 💡 Tips

> Hitung per segmentasi waktu. Untuk jam ke-4, berarti sudah lewat 3 jam, jadi biaya = 5000 + (2×3000) + (1×2000). Gunakan pendekatan matematika atau kondisional bertingkat.
