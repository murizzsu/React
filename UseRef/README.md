# Use Reff
- sama seperti useState yang membedakan hanya useReff perlu direfresh untuk merender dan tidak punya setter seperti use state dan mengandakan .current untuk mengakses nilai
- UseRef data disimpan namun tampilan tidak berubah, perlu direfresh terlebih dulu

- Fungsi ke2 dari useRef adalah manipulasi DOM

- ketika menggunakan useRef tidak dapat langsung digunakan dalam sebuah komponen. Tapi perlu menggunakan forwardRed sehingga dapat dikirimkan sebagai props seperti dalam contoh FormLogin.jsx yang diteruskan ke input.jsx

- useRef adalah hook di React yang digunakan untuk membuat objek mutable yang dapat menyimpan nilai dan dapat bertahan antar re-render tanpa menyebabkan re-render ulang. Biasanya, useRef digunakan untuk mendapatkan referensi ke elemen DOM atau menyimpan nilai yang tidak memicu re-render saat nilainya berubah. Berikut adalah contoh penggunaan useRef:
1. Mendapatkan referensi ke element DOM
```
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  // Membuat ref untuk menyimpan referensi ke elemen input
  const inputRef = useRef(null);

  // Fokuskan elemen input setelah komponen dirender
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* Menggunakan ref untuk mendapatkan referensi ke elemen input */}
      <input ref={inputRef} type="text" />
    </div>
  );
}

```
Dalam contoh di atas, inputRef digunakan untuk mendapatkan referensi ke elemen input, dan kemudian useEffect digunakan untuk memberikan fokus pada elemen input setelah komponen pertama kali dirender.

2. Menyimpan nilai yang tidak memicu re-render
```
import React, { useRef } from 'react';

function MyComponent() {
  // Membuat ref untuk menyimpan nilai yang tidak memicu re-render
  const countRef = useRef(0);

  const incrementCount = () => {
    // Mengakses nilai ref dan mengubahnya tanpa menyebabkan re-render
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  return (
    <div>
      <p>Current count: {countRef.current}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

```

Pada contoh di atas, countRef digunakan untuk menyimpan nilai yang tidak memicu re-render. Saat tombol di klik, nilai diubah secara langsung di dalam ref tanpa memicu re-render pada komponen.

Penting untuk diingat bahwa nilai dalam useRef dapat diakses melalui properti current. Selain itu, nilai pada useRef dapat diubah tanpa menyebabkan re-render, sehingga dapat digunakan untuk menyimpan data yang tidak memerlukan pembaruan komponen.