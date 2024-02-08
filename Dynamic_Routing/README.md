# Dynamic Routing
Dynamic routing adalah praktik dalam pengembangan web di mana rute atau URL dari suatu aplikasi web ditentukan secara dinamis berdasarkan parameter atau data yang diberikan. Ini memungkinkan pembuatan rute yang dapat berubah atau disesuaikan dengan kondisi atau data tertentu yang ada dalam aplikasi.

Dalam konteks aplikasi web, routing mengacu pada pengaturan bagaimana aplikasi menangani permintaan pengguna ke berbagai halaman atau komponen berbeda berdasarkan URL yang mereka kunjungi. Dynamic routing memungkinkan aplikasi untuk membuat rute secara dinamis, seringkali berdasarkan data yang berasal dari sumber eksternal seperti database atau API.

- Dynamic Routing diimplementasikan di detailProduct.jsx

- contoh dynamic routing
> /product/:id
> /blog/:title

- Untuk menangkap parameter tersebut gunakan react-router-dom
> import { useParams } from "react-router-dom"
