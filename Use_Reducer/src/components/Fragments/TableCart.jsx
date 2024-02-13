import React from 'react'
import { useState, useContext, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPriceContext'

const TableCart = (props) => {
    const { products } = props
    const cart = useSelector((state) => state.cart.data) // mengambil data react redux
    const { isDarkMode } = useContext(DarkMode)
    const dispatch = useTotalPriceDispatch()
    const {total} = useTotalPrice()
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty

            }, 0) // mulai dari indeks berapa dari index cartnya
            // setTotalPrice(sum)
            dispatch({
                type: "update",
                payload: {
                    total: sum
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, products])

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
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
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
                    <td>${" "} {total.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart