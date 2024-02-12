import React from 'react'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkMode } from '../../context/DarkMode'
const AuthLayouts = (props) => {
    const { children, title, type } = props
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    console.log(isDarkMode)
    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
            <div className="w-full max-w-xs">
                <button className='absolute right-2 top-2 bg-blue-600 p-2 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode? "Light": "Dark"}
                </button>
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, Please enter your details
                </p>
                {children}

                {/* <p className='text-sm mt-5 text-center'>
                    {type === "login" ? " Don't have an account?" : "Already have an account?"}
                    {type == "login" && (<Link to='/register' className='font-bold text-blue-600'>{" "}Register</Link>)}
                    {type == "register" && (<Link to='/login' className='font-bold text-blue-600'>{" "}Login</Link>)}
                </p> */}

                {<Navigation type={type}/>}


            </div>
        </div>
    )
}

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className='text-sm mt-5 text-center'>
                Don't have an account? {" "}
                {type == "login" && (<Link to='/register' className='font-bold text-blue-600'>{" "}Register</Link>)}
            </p>
        )
    } else {
        return (
            <p className='text-sm mt-5 text-center'>
                Already have an account? {" "}
                {type == "register" && (<Link to='/login' className='font-bold text-blue-600'>{" "}Login</Link>)}
            </p>
        )
    }
}

export default AuthLayouts