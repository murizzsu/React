# Nested Component
- Merupakan komponen dalam komponen

## Contoh implementasinya
```
const CardProduct = (props) => {
    const {children} = props
    return (
        <div className='w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2'>
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image} = props
    return (
        <a href="">
            <img src={image} alt="product" className='p-8 rounded-t-lg' />
        </a>
    )
}
CardProduct.Header =  Header
export default CardProduct
```

```
<CardProduct.Header image="/images/shoes-1.jpg"/>
```
