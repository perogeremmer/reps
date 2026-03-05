---
title: "ATM Sederhana"
description: "Latihan kompleks yang menggabungkan variabel, kondisi, dan loop untuk membuat simulasi ATM sederhana dengan menu interaktif."
level: "Level 2: Menengah"
topik: "Kombinasi Konsep"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA ATMSederhana

  saldo = 1000000  -- saldo awal
  selesai = false

  WHILE selesai == false DO
      PRINT "=== MENU ATM ==="
      PRINT "1. Cek Saldo"
      PRINT "2. Tarik Tunai"
      PRINT "3. Setor Tunai"
      PRINT "4. Keluar"
      PRINT "================"
      
      INPUT pilihan

      IF pilihan == 1 THEN
          PRINT "Saldo Anda: Rp " + saldo
          
      ELSE IF pilihan == 2 THEN
          INPUT jumlah_tarik
          IF jumlah_tarik > saldo THEN
              PRINT "Saldo tidak mencukupi!"
          ELSE IF jumlah_tarik <= 0 THEN
              PRINT "Jumlah tidak valid!"
          ELSE
              saldo = saldo - jumlah_tarik
              PRINT "Penarikan berhasil!"
              PRINT "Sisa saldo: Rp " + saldo
          END IF
          
      ELSE IF pilihan == 3 THEN
          INPUT jumlah_setor
          IF jumlah_setor <= 0 THEN
              PRINT "Jumlah tidak valid!"
          ELSE
              saldo = saldo + jumlah_setor
              PRINT "Setoran berhasil!"
              PRINT "Saldo sekarang: Rp " + saldo
          END IF
          
      ELSE IF pilihan == 4 THEN
          PRINT "Terima kasih telah menggunakan ATM!"
          selesai = true
          
      ELSE
          PRINT "Pilihan tidak valid!"
      END IF
      
      PRINT ""  -- baris kosong untuk pemisah
  END WHILE

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set saldo awal dan flag selesai
  2. **Main loop**: Program berjalan terus sampai user memilih keluar
  3. **Tampil menu**: Tampilkan pilihan menu setiap iterasi
  4. **Proses pilihan**: Gunakan IF-ELSE IF untuk handle setiap menu
  5. **Validasi input**: Cek apakah input valid (jumlah positif, saldo cukup, dll)
  6. **Update saldo**: Update saldo saat tarik atau setor
  7. **Exit**: Set flag selesai = true untuk menghentikan loop

  ## Variasi

  Coba modifikasi untuk:
  - Tambahkan fitur transfer ke rekening lain
  - Simpan riwayat transaksi (5 transaksi terakhir)
  - Tambahkan PIN untuk keamanan
  - Tambahkan batas penarikan harian
  - Buat multi-user (simpan data beberapa nasabah)
---

## 📝 Problem

Buatlah simulasi ATM sederhana dengan menu interaktif. Program memiliki saldo awal Rp 1.000.000 dan menampilkan menu berulang kali sampai user memilih keluar.

### Fitur yang Harus Ada:
1. **Cek Saldo**: Menampilkan saldo saat ini
2. **Tarik Tunai**: Mengurangi saldo (dengan validasi saldo cukup)
3. **Setor Tunai**: Menambah saldo (dengan validasi jumlah positif)
4. **Keluar**: Menghentikan program

### Validasi:
- Tidak bisa tarik uang melebihi saldo
- Jumlah tarik/setor harus lebih besar dari 0
- Pilihan menu harus valid (1-4)

### Contoh Interaksi:

```
=== MENU ATM ===
1. Cek Saldo
2. Tarik Tunai
3. Setor Tunai
4. Keluar
================
Pilihan: 2

Jumlah tarik: 500000
Penarikan berhasil!
Sisa saldo: Rp 500000

=== MENU ATM ===
1. Cek Saldo
2. Tarik Tunai
3. Setor Tunai
4. Keluar
================
Pilihan: 1

Saldo Anda: Rp 500000

=== MENU ATM ===
...
Pilihan: 4

Terima kasih telah menggunakan ATM!
```

## 💡 Tips

> Gunakan WHILE loop untuk membuat program berjalan terus menerus. Gunakan flag (selesai) untuk mengontrol kapan program berhenti. Selalu validasi input user sebelum melakukan operasi!
