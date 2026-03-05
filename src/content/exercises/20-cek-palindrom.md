---
title: "Cek Palindrom"
description: "Latihan membalik string dan membandingkan untuk mengecek apakah suatu kata adalah palindrom."
level: "Level 2: Menengah"
topik: "String & Loop"
pubDate: 2026-02-19
solution: |
  ## Pseudocode

  ```
  ALGORITMA CekPalindrom

  INPUT kata

  -- Inisialisasi
  panjang = LENGTH(kata)
  is_palindrom = true
  i = 0

  WHILE i < panjang / 2 AND is_palindrom == true DO
      -- Bandingkan karakter dari depan dan belakang
      karakter_depan = kata[i]
      karakter_belakang = kata[panjang - 1 - i]
      
      IF karakter_depan != karakter_belakang THEN
          is_palindrom = false
      END IF
      
      i = i + 1
  END WHILE

  IF is_palindrom == true THEN
      OUTPUT "Palindrom"
  ELSE
      OUTPUT "Bukan Palindrom"
  END IF

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Hitung panjang**: Dapatkan jumlah karakter dalam kata
  2. **Loop**: Bandingkan karakter dari depan dan belakang
  3. **Cek**: Jika ada yang tidak sama, bukan palindrom
  4. **Stop early**: Berhenti jika sudah menemukan ketidakcocokan
  5. **Output**: Tampilkan hasil pengecekan

  ## Variasi

  Coba modifikasi untuk:
  - Abaikan spasi dan tanda baca ("A man, a plan, a canal: Panama")
  - Abaikan huruf besar/kecil (case-insensitive)
  - Cek palindrom untuk angka
  - Buat palindrom dari kata yang diberikan
  - Cek palindrom kalimat lengkap
---

## 📝 Problem

Buatlah algoritma untuk mengecek apakah suatu kata adalah palindrom. Palindrom adalah kata yang dibaca sama dari depan maupun belakang.

**Contoh Palindrom:**
kodok, malam, kasur rusak, radar, level

### Input
- `kata`: Sebuah string/kata

### Output
- "Palindrom" jika kata palindrom
- "Bukan Palindrom" jika tidak

### Contoh

| Input       | Output           |
|-------------|------------------|
| kodok       | Palindrom        |
| malam       | Palindrom        |
| python      | Bukan Palindrom  |
| radar       | Palindrom        |
| mobil       | Bukan Palindrom  |

## 💡 Tips

> Bandingkan karakter satu per satu dari ujung ke ujung. Karakter pertama dengan karakter terakhir, kedua dengan kedua terakhir, dan seterusnya. Jika semua pasangan sama, berarti palindrom!
