import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'
const FormLogin = () => {
    const handleLogin=(event)=>{
        event.preventDefault() // halaman tidak akan melakukan refresh ketika disubmit
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        console.log(event.target.email.value) // . email disini berasal dari name yang dikirimkan 
        console.log(event.target.password.value)
        // console.log("login")
        window.location.href = "/products"
    }
    return (
        <form onSubmit={handleLogin}> 
         {/* ketika button submit diklik maka akan melakukan handleLogin */}
            <InputForm label="email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="password" type="password" placeholder="*****" name="password" />
            <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin