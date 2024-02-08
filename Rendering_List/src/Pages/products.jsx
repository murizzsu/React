import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'

const products = [
    {
        id: 1,
        name: "Sepatu Lama",
        price: "Rp 1000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto neque temporibus veniam iste repudiandae rerum eaque? Obcaecati, quod. Cum nesciunt necessitatibus dolores labore excepturi inventore odio error ipsam optio."
    }, {
        id: 2,
        name: "Sepatu Baru",
        price: "Rp 500.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto neque temporibus veniam iste repudiandae rerum eaque? Obcaecati, quod."
    }, {
        id: 1,
        name: "Sepatu Adadong",
        price: "Rp 1000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]
const ProductsPage = () => {
    return (
        <div className='flex justify-center py-5'>

            {
                products.map((product) => (
                    <CardProduct >
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>

                ))
            }
        </div>

    )
}

export default ProductsPage