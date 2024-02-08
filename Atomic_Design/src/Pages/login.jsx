import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
        <FormLogin/>
    </AuthLayouts>
  )
}

export default LoginPage