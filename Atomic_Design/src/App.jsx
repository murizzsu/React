//function component using arrow function
import React from "react"
import LoginPage from "./Pages/Login"
import RegisterPage from "./Pages/register"
export default function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage/> */}
      <RegisterPage/>
    </div>
  )
}