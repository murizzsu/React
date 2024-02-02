import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Elements/Button/Index'
import Counter from '../components/Fragments/Counter'
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
        id: 3,
        name: "Sepatu Adadong",
        price: "Rp 1000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]

const email = localStorage.getItem("email")
const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
}
const ProductsPage = () => {
    return (
        <>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
                {email}
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className='flex justify-center py-5'>

                {
                    products.map((product) => (
                        <CardProduct key={product.id} >
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} />
                        </CardProduct>

                    ))
                }
            </div >
            <div className="flex w-100 justify-center">
                <Counter />
            </div>
        </>

    )
}

export default ProductsPage