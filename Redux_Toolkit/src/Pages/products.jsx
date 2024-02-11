import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Elements/Button/Index'
import { useState, useEffect, useRef } from 'react'
import Counter from '../components/Fragments/Counter'
import { getProduct } from '../service/product.service'
import { getUsername } from '../service/auth.service'
import { useLogin } from '../hooks/useLogin'




const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducs] = useState([])
    const username = useLogin()

    // Get product from API
    useEffect(() => {
        getProduct((data) => {
            setProducs(data)
        })
    }, [])



    //implementasi didmount
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])


    //implementasi diupdate
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty

            }, 0) // mulai dari indeks berapa dari index cartnya
            setTotalPrice(sum)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, products]) //dilakukan untuk mengecek perubahan pada cart dan products, karna kode diatas akan mengecek product terlebih dahulu. yang mana jika cart saja maka produk tidak akan dieksekusi


    const handleLogout = () => {
        localStorage.removeItem("token")
        // localStorage.removeItem("password")
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([
                ...cart, // data lama dimasukan kembali
                {
                    id: id,
                    qty: 1
                }
            ])
        }
    }

    // useRef Manipulasi DOM
    const totalPriceRef = useRef(null)
    console.log(totalPriceRef)
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart])

    return (
        <>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
                <span className='mr-5'>{username}</span>
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className='flex justify-center py-5'>
                <div className='w-4/6 flex flex-wrap'>
                    {
                        products.length > 0 && products.map((product) => (
                            <CardProduct key={product.id} >
                                <CardProduct.Header image={product.image} id={product.id}/>
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                            </CardProduct>

                        ))
                    }
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600 ml-4 mb-2'>Cart</h1>
                    <table className='text-left table-auto border-separate border-spacing-x-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0, 10)} ...</td>
                                        <td>{product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                                        <td>{item.qty}</td>
                                        <td>${" "}  {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td>${" "} {totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                            </tr>
                        </tbody>
                    </table>
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