import React from 'react'
import Button from '../Elements/Button/Index'
import { useLogin } from '../../hooks/useLogin'
import { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice } from '../../context/TotalPriceContext'
const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const {total} = useTotalPrice()
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])
    const handleLogout = () => {
        localStorage.removeItem("token")
        // localStorage.removeItem("password")
        window.location.href = "/login"
    }
    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
            <span className='mr-5'>{username}</span>
            <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            
            <div className='fkex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5'>
                Item : {totalCart} | Price : ${total}
            </div>
            <Button className=' bg-black p-10 mx-5 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
            </Button>
        </div>

    )
}

export default Navbar