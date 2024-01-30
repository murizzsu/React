import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'
const FormLogin = () => {
    return (
        <form action="">
            <InputForm label="email" type="email" placeholder="example@gmail.com" name="email" />
            <InputForm label="password" type="password" placeholder="*****" name="password" />
            <Button classname="bg-blue-500 w-full">Login</Button>
        </form>
    )
}

export default FormLogin