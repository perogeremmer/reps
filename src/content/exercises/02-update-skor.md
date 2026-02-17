---
title: "Update Skor Permainan"
description: "Latihan menimpa (overwrite) dan memperbarui nilai variabel menggunakan operasi matematika dasar."
level: "Level 1: Dasar"
topik: "Variabel & Matematika"
pubDate: 2026-02-17
solution: |
  ## Pseudocode

  ```
  ALGORITMA UpdateSkor

  -- Inisialisasi awal
  skor = 0

  -- Mengalahkan musuh pertama (+10)
  skor = skor + 10

  -- Mengalahkan musuh kedua (+10)
  skor = skor + 10

  -- Terkena jebakan (-5)
  skor = skor - 5

  -- Tampilkan hasil
  PRINT "Skor akhir pemain adalah: " + skor

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Mulai dengan skor = 0
  2. **Update variabel**: Gunakan operasi matematika untuk mengubah nilai skor
  3. **Overwrite**: Nilai skor terus diperbarui (ditimpa) dengan nilai baru
  4. **Output**: Tampilkan hasil akhir setelah semua operasi

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan poin bonus jika skor mencapai tertentu
  - Simpan skor tertinggi (high score)
  - Reset skor ke 0 jika terkena jebakan beruntun
---

## 📝 Problem

Dalam sebuah permainan, pemain memulai dengan skor 0. Setiap kali pemain mengalahkan musuh, skornya bertambah 10. Jika pemain terkena jebakan, skornya berkurang 5.

Buatlah alur logika untuk:
1. Mendeklarasikan skor awal.
2. Mensimulasikan pemain mengalahkan 2 musuh.
3. Mensimulasikan pemain terkena 1 jebakan.
4. Tampilkan skor akhirnya.

### Input
Tidak ada input dari user. Cukup deklarasi dan update variabel.

### Output
Skor akhir pemain.

### Contoh Output
```
Skor akhir pemain adalah: 15
```

## 💡 Tips

> Ingat bahwa variabel bisa di-update (overwrite) berkali-kali. Gunakan pola `variabel = variabel + nilai` untuk menambah/mengurangi nilai yang sudah ada.
