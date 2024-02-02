# Event Handler
- Event handler adalah fungsi atau metode dalam pemrograman yang ditetapkan untuk menangani atau merespons suatu peristiwa (event) yang terjadi selama eksekusi program. Event handler digunakan untuk menanggapi input pengguna, perubahan status sistem, atau peristiwa lainnya yang dapat terjadi saat program berjalan.

Contoh event handler dapat mencakup: 
- Mouse Click Event Handler
```
button.addEventListener('click', function() {
  // Code yang akan dijalankan saat tombol diklik
});

```

- Keyboar Event Handler
```
input.addEventListener('keydown', function(event) {
  // Code yang akan dijalankan saat kunci pada keyboard ditekan
});

```

- Form Submission Event Handler
```
form.addEventListener('submit', function(event) {
  // Code yang akan dijalankan saat formulir disubmit
  event.preventDefault(); // Untuk mencegah perilaku bawaan formulir
});

```

- Window Resize Event Handler
```
window.addEventListener('resize', function() {
  // Code yang akan dijalankan saat jendela browser diubah ukurannya
});

```

- Event handler yang digunakan kali ini yaitu menyimpan data login ke local storage seperti diimplementasikan dalam FormLogin.jsx

- Cara buka localstorage yaitu, inspect > application > Local Storage

- Cara menyimpan ke local storage 
```
localStorage.setItem('email', event.target.email.value)

localStorage.setItem('email', event.target.password.value)
```

- cara mengambil data dari localstorage
```
localStorage.getItem("email")
```

- menghapus localstorage
```
localStorage.removeItem("email")
localStorage.removeItem("password")
```