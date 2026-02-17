---
title: "Tukar Isi Gelas (Swapping)"
description: "Pelajari cara klasik menukar nilai antara dua variabel dengan bantuan variabel sementara (temp)."
level: "Level 1: Dasar"
topik: "Manipulasi Variabel"
pubDate: 2026-02-17
solution: |
  ## Pseudocode

  ```
  ALGORITMA TukarGelas

  -- Deklarasi awal
  gelas_a = "Kopi"
  gelas_b = "Susu"

  -- Proses pertukaran menggunakan variabel temp (gelas kosong)
  temp = gelas_a
  gelas_a = gelas_b
  gelas_b = temp

  -- Tampilkan hasil
  PRINT "Isi Gelas A sekarang: " + gelas_a
  PRINT "Isi Gelas B sekarang: " + gelas_b

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Variabel temp**: Dibutuhkan untuk menyimpan nilai sementara
  2. **Alur pertukaran**:
     - Simpan nilai A ke temp
     - Pindahkan nilai B ke A
     - Pindahkan nilai temp (nilai A lama) ke B
  3. **Analogi**: Seperti menukar isi gelas menggunakan gelas ketiga (kosong)

  ## Variasi

  Coba modifikasi untuk:
  - Tukar 3 variabel secara berurutan (A→B→C→A)
  - Tukar tanpa variabel temp (hanya untuk angka, pakai operasi matematika)
---

## 📝 Problem

Kamu memiliki dua variabel: `gelas_a` berisi "Kopi" dan `gelas_b` berisi "Susu". Kamu ingin menukar isinya sehingga `gelas_a` berisi "Susu" dan `gelas_b` berisi "Kopi".

**Aturan ketat:** Kamu tidak boleh langsung menulis `gelas_a = "Susu"` dan `gelas_b = "Kopi"`. Kamu harus menukar nilainya menggunakan logika variabel sementara (*temporary variable*).

### Input
Tidak ada input dari user. Variabel sudah terisi di awal.

### Output
Isi Gelas A dan Gelas B setelah ditukar.

### Contoh Output
```
Isi Gelas A sekarang: Susu
Isi Gelas B sekarang: Kopi
```

## 💡 Tips

> Bayangkan kamu punya 2 gelas berisi minuman dan 1 gelas kosong. Untuk menukar isi gelas A dan B, kamu butuh gelas kosong sebagai tempat penampungan sementara.
