---
title: "Sistem Login Sederhana"
description: "Latihan menggunakan operator logika AND untuk memvalidasi dua kondisi sekaligus (Username dan Password)."
level: "Level 1: Dasar"
topik: "Logika String (AND)"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA LoginSederhana

  -- Data kredensial yang benar
  user_valid = "admin"
  pass_valid = "rahasia123"

  INPUT input_user
  INPUT input_pass

  -- Cek apakah KEDUANYA cocok
  IF input_user == user_valid AND input_pass == pass_valid THEN
      PRINT "Login Berhasil! Selamat datang."
  ELSE
      PRINT "Login Gagal! Username atau password salah."
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Inisialisasi**: Set username dan password yang valid
  2. **Input**: Terima input username dan password dari user
  3. **Validasi**: Gunakan operator AND untuk cek keduanya
  4. **Output**: Tampilkan status login berhasil atau gagal

  ## Variasi

  Coba modifikasi untuk:
  - Case-insensitive comparison untuk username
  - Batasi percobaan login maksimal 3 kali
  - Tambahkan verifikasi captcha sederhana
---

## 📝 Problem

Buatlah simulasi login sederhana. Program memiliki *username* yang benar yaitu "admin" dan *password* yang benar yaitu "rahasia123".

Minta pengguna memasukkan username dan password. Jika **keduanya** benar, tampilkan "Login Berhasil". Jika salah satu atau keduanya salah, tampilkan "Login Gagal".

### Input
`input_user` dan `input_pass`.

### Output
Status login.

### Contoh

| Input                         | Output                                    |
|-------------------------------|-------------------------------------------|
| admin, rahasia123             | Login Berhasil! Selamat datang.           |
| admin, passwordsalah          | Login Gagal! Username atau password salah.|
| user, rahasia123              | Login Gagal! Username atau password salah.|

## 💡 Tips

> Operator AND (`&&` atau `AND`) hanya menghasilkan TRUE jika kedua kondisi bernilai TRUE. Jika salah satu saja FALSE, hasilnya FALSE.
