# Get Data API

- Disini data yang digunakan berasal dari [fake store API](https://fakestoreapi.com/)
- install extension json formatter agar tampilan json lebih rapih di web
- library yang sering digunakan untuk API Call yaitu axios
- Untuk menjalankan axios buka terminal, kemudian :
  > npm install axios
- kemudian buat folder di src bernama service/product.service.jsx (format bisa .js/.jsx) karena tidak menggunakan syntax jsx maka format yang digunakan yaitu .js

## Mengirimkan data ke API

- untuk mengirimkan data ke API bisa menggunakan method POST seperti dicontohkan dalam FormLogin.jsx
- contoh API

```
fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
```

- untuk mendapatkan user yang tersedia bisa cek di [fake store API Get All User]("https://fakestoreapi.com/users")

- Setiap login berhasil maka akan mendapatkan token yang dapat digunakan sebagai identifier key

- Untuk decode token bisa menggunakan library jwt-decode
> npm i jwt-decode