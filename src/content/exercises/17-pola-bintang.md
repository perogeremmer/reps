---
title: "Pola Segitiga Bintang"
description: "The Mother of Logic Drill. Latihan menggunakan Loop di dalam Loop (Nested Loop) untuk membuat pola visual."
level: "Level 2: Looping & Array"
topik: "Nested Loop"
pubDate: 2026-02-20
solution: |
  ## Pseudocode

  ```
  ALGORITMA PolaBintang

  INPUT n_string
  N = PARSE(n_string)

  -- Loop Baris (i)
  FOR i = 1 TO N DO
      bintang = ""
      
      -- Loop Kolom (j) - Sebanyak nilai i saat ini
      FOR j = 1 TO i DO
          bintang = bintang + "*"
      END FOR
      
      PRINT bintang
  END FOR

  END ALGORITMA
  ```

  ## Penjelasan

  1. **Input**: Terima angka N
  2. **Loop luar (i)**: Iterasi untuk setiap baris (1 sampai N)
  3. **Loop dalam (j)**: Untuk setiap baris i, cetak bintang sebanyak i kali
  4. **Output**: Cetak bintang per baris

  ## Variasi

  Coba modifikasi untuk:
  - Pola terbalik (segitiga terbalik)
  - Pola piramida (berbentuk segitiga sama kaki)
  - Pola berlian (kombinasi segitiga normal dan terbalik)
---

## 📝 Problem

Buatlah program yang menerima input angka `N`. Program harus mencetak pola segitiga siku-siku menggunakan karakter bintang (`*`).

*Contoh:* Jika N = 5, outputnya:
```
*
**
***
****
*****
```

*Hint:* Kamu butuh dua variabel loop. Loop luar (`i`) untuk baris, Loop dalam (`j`) untuk jumlah bintang di baris tersebut.

### Input
Angka `N`.

### Output
Pola bintang.

### Contoh

| Input | Output                  |
|-------|-------------------------|
| 3     | `*`<br>`**`<br>`***`   |
| 5     | `*` sampai `*****`      |

## 💡 Tips

> Nested loop adalah loop di dalam loop. Loop dalam akan menyelesaikan semua iterasinya untuk setiap satu iterasi loop luar.
