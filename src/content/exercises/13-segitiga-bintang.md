---
title: "Segitiga Bintang"
description: "Latihan menggunakan nested loop untuk membuat pola segitiga bintang dengan variasi tinggi."
level: "Level 2: Menengah"
topik: "Perulangan Bersarang"
pubDate: 2026-02-18
solution: |
  ## Pseudocode

  ```
  ALGORITMA SegitigaBintang

  INPUT tinggi

  i = 1
  WHILE i <= tinggi DO
      -- Cetak spasi
      spasi = tinggi - i
      WHILE spasi > 0 DO
          PRINT " "
          spasi = spasi - 1
      END WHILE

      -- Cetak bintang
      bintang = 1
      WHILE bintang <= (2 * i - 1) DO
          PRINT "*"
          bintang = bintang + 1
      END WHILE

      PRINT newline  -- pindah baris
      i = i + 1
  END WHILE

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima tinggi segitiga
  2. **Outer loop** (i): Loop untuk setiap baris
  3. **Inner loop 1**: Cetak spasi (berkurang setiap baris)
  4. **Inner loop 2**: Cetak bintang (bertambah setiap baris)
  5. **Pattern**: Baris ke-i memerlukan (tinggi-i) spasi dan (2i-1) bintang
  6. **Newline**: Pindah ke baris baru setelah setiap baris selesai

  ## Variasi

  Coba modifikasi untuk:
  - Segitiga terbalik (puncak di bawah)
  - Segitiga siku-siku (kiri atau kanan)
  - Belah ketupat (kombinasi segitiga atas dan bawah)
  - Piramida dengan angka (1, 12, 123, dst)
---

## 📝 Problem

Buatlah algoritma untuk membuat pola segitiga bintang dengan tinggi tertentu. Segitiga harus simetris dan berbentuk piramida.

### Input
- `tinggi`: Tinggi segitiga (jumlah baris)

### Output
- Pola segitiga bintang

### Contoh (tinggi = 5)

**Output:**
```
    *
   ***
  *****
 *******
*********
```

### Contoh (tinggi = 3)

**Output:**
```
  *
 ***
*****
```

## 💡 Tips

> Perhatikan patternnya:
> - Baris 1: 4 spasi + 1 bintang
> - Baris 2: 3 spasi + 3 bintang  
> - Baris 3: 2 spasi + 5 bintang
> - Rumus spasi: tinggi - i
> - Rumus bintang: 2*i - 1
