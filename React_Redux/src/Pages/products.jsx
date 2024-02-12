import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Elements/Button/Index'
import { useState, useEffect, useRef } from 'react'
import Counter from '../components/Fragments/Counter'
import { getProduct } from '../service/product.service'
// import { getUsername } from '../service/auth.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'



const ProductsPage = () => {

    const [products, setProducs] = useState([])
    useLogin()

    // Get product from API
    useEffect(() => {
        getProduct((data) => {
            setProducs(data)
        })
    }, [])



   

    return (
        <>
           {/* <Navbar/> */}
            <div className='flex justify-center py-5'>
                <div className='w-4/6 flex flex-wrap'>
                    {
                        products.length > 0 && products.map((product) => (
                            <CardProduct key={product.id} >
                                <CardProduct.Header image={product.image} id={product.id}/>
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer price={product.price} id={product.id}  />
                            </CardProduct>

                        ))
                    }
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600 ml-4 mb-2'>Cart</h1>
                    <TableCart products={products}/>
                </div>
            </div >
            <div className="mt-5 flex justify-center">
                <Counter>

                </Counter>
            </div>

        </>

    )
}

export default ProductsPage