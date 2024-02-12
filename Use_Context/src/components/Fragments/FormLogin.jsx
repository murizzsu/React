import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'
import { useRef, useEffect, useState } from "react"
import { Authlogin } from '../../service/auth.service'
const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")
    const handleLogin = (event) => {
        event.preventDefault() // halaman tidak akan melakukan refresh ketika disubmit
        // localStorage.setItem('email', event.target.email.value)
        // localStorage.setItem('password', event.target.password.value)
        // console.log(event.target.email.value) // . email disini berasal dari name yang dikirimkan 
        // console.log(event.target.password.value)
        // // console.log("login")
        // window.location.href = "/products"
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        Authlogin(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res)
                window.location.href = "/products"
            } else {
                console.log(res.response.data)
                setLoginFailed(res.response.data)
            }
        })
        // event.target.username.value adalah cara untuk mengakses nilai dari input field dengan nama username yang terjadi pada event. Ini adalah sintaksis yang umum digunakan dalam event handler di React, terutama saat menangani formulir.
    }

    const usernameRef = useRef(null)
    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleLogin}>
            {/* ketika button submit diklik maka akan melakukan handleLogin */}
            
            <InputForm label="username" type="text" placeholder="john doe" name="username" ref={usernameRef} />
            <InputForm label="password" type="password" placeholder="*****" name="password"
            />
            <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
            {loginFailed && <p className='text-red-500 text-center mt-5'>{loginFailed}</p>}
        </form>
    )
}

export default FormLogin