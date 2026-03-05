---
title: "Simulasi Kunci ATM (While Loop)"
description: "Menggunakan WHILE loop untuk terus meminta input sampai kondisi tertentu terpenuhi (password benar)."
level: "Level 2: Looping & Array"
topik: "While Loop"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA TebakPIN

  pin_benar = "1234"
  input_pin = ""

  PRINT "Masukkan PIN Anda:"
  INPUT input_pin

  -- Selama input_pin TIDAK SAMA DENGAN pin_benar, ulangi terus
  WHILE input_pin != pin_benar DO
      PRINT "PIN Salah! Coba lagi:"
      INPUT input_pin
  END WHILE

  PRINT "PIN Benar! Akses diberikan."

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set PIN yang benar dan variabel input
  2. **Input pertama**: Minta PIN sebelum masuk loop
  3. **While loop**: Ulangi selama PIN salah
  4. **Re-input**: Minta PIN lagi di dalam loop
  5. **Output sukses**: Keluar dari loop berarti PIN benar

  ## Variasi

  Coba modifikasi untuk:
  - Batasi percobaan maksimal 3 kali
  - Berikan opsi "Lupa PIN" setelah 3x salah
  - Tampilkan sisa percobaan yang tersisa
---

## 📝 Problem

Buatlah simulasi input PIN ATM. PIN yang benar adalah "1234".
Program harus **terus menerus** meminta user memasukkan PIN selama PIN yang dimasukkan salah. Program baru berhenti jika user memasukkan PIN yang benar.

*Hint:* Gunakan `WHILE` karena kita tidak tahu berapa kali user akan salah memasukkan PIN.

### Input
Input PIN berulang-ulang.

### Output
Pesan sukses jika berhenti loop.

### Contoh

| Input (berurutan)     | Output                                      |
|-----------------------|---------------------------------------------|
| 0000, 1111, 1234      | PIN Salah! Coba lagi: (loop) → PIN Benar!   |
| 1234                  | PIN Benar! Akses diberikan.                 |
| 9999, 1234            | PIN Salah! Coba lagi: (loop) → PIN Benar!   |

## 💡 Tips

> WHILE loop digunakan ketika jumlah iterasi tidak diketahui di awal. Pastikan ada mekanisme untuk mengubah kondisi agar loop bisa berhenti (tidak infinite loop).
