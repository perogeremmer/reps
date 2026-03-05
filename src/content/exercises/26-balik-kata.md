---
title: "Membalik Kata (Reverse String)"
description: "Latihan logika membalik urutan karakter. Menganggap String sebagai Array of Characters."
level: "Level 2: Looping & Array"
topik: "String & Loop"
pubDate: 2026-02-20
solution: |
  ## Pseudocode

  ```
  ALGORITMA BalikKata

  INPUT text
  panjang = LENGTH(text)
  hasil_balik = ""

  -- Mulai dari indeks terakhir
  i = panjang - 1
  
  -- Loop mundur sampai indeks 0
  WHILE i >= 0 DO
      -- Ambil huruf pada posisi i, tempel ke hasil
      hasil_balik = hasil_balik + text[i]
      i = i - 1
  END WHILE

  PRINT hasil_balik

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima string text
  2. **Hitung panjang**: Gunakan LENGTH() untuk tahu jumlah karakter
  3. **Loop mundur**: Iterasi dari indeks terakhir (panjang-1) ke 0
  4. **Concatenate**: Tambahkan karakter ke hasil_balik
  5. **Output**: Tampilkan kata yang sudah dibalik

  ## Variasi

  Coba modifikasi untuk:
  - Cek palindrome (kata yang sama jika dibalik, contoh: "katak")
  - Balik urutan kata dalam kalimat (bukan huruf)
  - Enkripsi sederhana dengan menggeser huruf (Caesar cipher)
---

## 📝 Problem

Buatlah program yang menerima input sebuah kata, lalu mencetaknya secara terbalik.
Contoh: Input "KASUR", Output "RUSAK".

*Strategi:* Lakukan looping mundur dari indeks huruf terakhir sampai indeks pertama (0).

### Input
Kata `text`.

### Output
Kata yang sudah dibalik.

### Contoh

| Input    | Output   |
|----------|----------|
| KASUR    | RUSAK    |
| LOGIKA   | AKIGOL   |
| A        | A        |

## 💡 Tips

> String bisa dianggap sebagai array of characters. Indeks dimulai dari 0, jadi karakter terakhir berada di indeks `LENGTH(text) - 1`.
