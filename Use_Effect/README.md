# UseEffect
- Seperti dalam praktek sebelumnya komponent DidMount, Update dll hanya bisa digunakan di class component, untuk functional component menggunakan hooks
- Untuk mengimplemnetasikan lifecycle komponen didmount dan didupdate dalam fungsional komponent bisa menggunakan useEffect
- Komponen perlu dimanipulasi untuk melakukan sikronisasi antar kompoenent
- Agar data tidak hilang maka data akan di simpan ke api yang mana dalam projek ini data akan disimpan ke local storage. Sehingga ketika komponen di mount akan secara otomatis mengambil data dari api.

## Contoh penggunaan ReactHooks (useEffect)
- Import useEffect
```
import React, { useEffect } from 'react';
```
- Gunakan useEffect
```
function MyComponent() {
  // useEffect akan dijalankan setiap kali komponen dirender atau nilai dependensi berubah
  useEffect(() => {
    // Code di sini akan dijalankan saat komponen pertama kali dirender
    // atau setiap kali nilai dependensi berubah

    // Contoh: Pemanggilan API
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Code di sini akan dijalankan saat komponen unmount atau nilai dependensi berubah
      // Ini bisa digunakan untuk membersihkan efek samping, seperti membatalkan langganan.
      cleanup();
    };
  }, [/* dependensi */]);

  return (
    <div>
      {/* JSX Komponen */}
    </div>
  );
}

```
- useEffect menerima dua parameter: fungsi efek dan array dependensi.
- Fungsi efek akan dijalankan setiap kali komponen dirender, atau jika nilai dependensi berubah.
- Array dependensi adalah array yang berisi variabel atau state yang menjadi dependensi efek.
- Jika array dependensi kosong, efek akan dijalankan hanya saat komponen pertama kali dirender.

- Contoh tanpa dependensi
```
useEffect(() => {
  console.log('Komponen pertama kali dirender');

  // Cleanup function (akan dijalankan saat komponen di-unmount)
  return () => {
    console.log('Komponen di-unmount');
  };
}, []);

```

- Contoh dengan dependensi
```
const MyComponent = ({ data }) => {
  useEffect(() => {
    console.log('Nilai data berubah:', data);

    // Cleanup function (akan dijalankan saat komponen di-unmount atau nilai data berubah)
    return () => {
      console.log('Komponen di-unmount atau nilai data berubah');
    };
  }, [data]);
};

```