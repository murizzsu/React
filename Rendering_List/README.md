# Rendering List
- ketika melakukan pengulangan pada list dan ingin mengembalikan komponen tanda () tidak memerlukan return sedangkan {} memerlukan return contohnya ada di bawah
```
products.map((product) => (
                    <CardProduct >
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>

                ))
```

```
           {
                products.map((product) => {
                    return(
                        <CardProduct >
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                    )
                })
            }
```