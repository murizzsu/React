import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'

const ProductsPage = () => {
    return (
        <div className='flex justify-center py-5'>
            <CardProduct >
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto neque temporibus veniam iste repudiandae rerum eaque? Obcaecati, quod. Cum nesciunt necessitatibus dolores labore excepturi inventore odio error ipsam optio.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1000.000"/>
            </CardProduct>
            <CardProduct >
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title="Sepatu Baru">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto neque temporibus veniam iste repudiandae rerum eaque? Obcaecati, quod. Cum nesciunt necessitatibus dolores labore excepturi inventore odio error ipsam optio.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1000.000"/>
            </CardProduct>
        </div>
        
    )
}

export default ProductsPage