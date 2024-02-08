# State
- Dalam React, state adalah objek yang digunakan untuk merepresentasikan data yang berubah seiring waktu selama siklus hidup komponen. State memungkinkan komponen React untuk menyimpan dan merender data dinamis. Saat data state berubah, React akan merender ulang komponen yang menggunakan data tersebut.

- Cara mendefinisikan dan menggunakan state dalam komponen React adalah sebagai berikut:
1. Inisialisasi State: State dapat diinisialisasi di dalam konstruktor komponen menggunakan fungsi setState:
```
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      myData: 'Initial Data',
    };
  }

  // ...
}

```
2. Mengakses State: Data state dapat diakses menggunakan this.state.namaState:
```
render() {
  return <p>{this.state.myData}</p>;
}

```

3. Mengubah State: State dapat diubah dengan menggunakan fungsi setState. Perubahan state akan memicu pembaruan komponen:
```
handleClick = () => {
  this.setState({
    myData: 'Updated Data',
  });
};

```

4. State dalam Functional Component: Dengan pengenalan React Hooks, functional component juga dapat memiliki state menggunakan useState:
```
import React, { useState } from 'react';

function MyFunctionalComponent() {
  const [myData, setMyData] = useState('Initial Data');

  // ...
}

```

- Penting untuk diingat bahwa state dalam React bersifat imutabel (immutable). Sebaiknya, hindari langsung memodifikasi state secara langsung dan gunakan setState untuk membuat pembaruan yang aman dan benar. State yang diubah akan meres trigger pembaruan komponen dan secara otomatis memicu pemanggilan fungsi render untuk merender tampilan baru.

## Disini state digunakan dalam fitur add to cart

- statefull component, membuat sebuah komponen menggunakan class
- stateless component, komponent yang dibuat menggunakan function

- jika ingin menggunakan state tidak dapat digunakan di statefull component

- untuk menggunakan state dalam stateless componen yaitu bisa menggunakan react hooks

## Contoh penggunaan statefull component
untuk penggunaan statefull componen bisa dilihat di file Component/Fragment/Counter.jsx yang di render di product.jsx