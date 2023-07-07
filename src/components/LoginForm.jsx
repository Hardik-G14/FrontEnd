import React, { useState } from 'react'
import ima from "../assets/image.jpg";
import google from "../assets/google.png"
import github from "../assets/github.png"
import { IconButton } from '@mui/material';
import PasswordField from './PasswordField';

const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const signUpHandler = () => {
        setIsSignIn(prevState => !prevState)
    }
    const [loginPass, setLoginPass] = useState(true);
    const [signUpPass, setSignUpPass] = useState(true);
    const [reEnterSignUpPass, setReEnterSignUpPass] = useState(true);
    return (
        <div className="flex flex-col space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0  m-6">
            {/* left side */}
            <div className="p-9 md:p-20 max-w-2xl">
                <h2 className="font-mono mb-5 text-4xl font-bold">{isSignIn ? "Login" : "SignUp"}</h2>
                <p className="max-w-sm mb-9 font-sans font-light text-grey-600">
                    {isSignIn ? "Login into your account to upload or download pictures,videos or music." : "Create an account to get full access to content"}
                </p>
                <form onSubmit={() => { }}>
                    {isSignIn ? (
                        <>
                            <div className='space-y-3'>
                                <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Enter your email address" />
                                <PasswordField placeholder="Enter Password" passwordState={loginPass} setPass={setLoginPass} />
                            </div>

                            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                                <div className='flex space-x-5 md:space-x-0 md:flex-col md:space-y-1'>
                                    <div className="font-thin cursor-pointer text-cyan-700">Forgot Password</div>
                                    <a className='cursor-pointer font-thin text-cyan-700' onClick={signUpHandler}>Create new account</a>
                                </div>
                                <button className='w-full md:w-auto p-6 font-sans font-bold text-white rounded-md shadow-sm px-9 
                    bg-cyan-700 shadow-cyan-100 hover:opacity-50 hover:shadow-lg transition hover:-translate-y-0.5 duration-150'>
                                    <span>Login</span>
                                </button>
                            </div>
                        </>) : (
                        <>
                            <div className='space-y-3'>
                                <div className='flex md:flex-row md:space-x-2 flex-col md:space-y-0 space-y-3'>
                                    <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="First name" type="text" />
                                    <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="LastName" type="text" />
                                </div>
                                <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Email" type="email" />
                                <PasswordField placeholder="Create Password" passwordState={signUpPass} setPass={setSignUpPass} />
                                <PasswordField placeholder="ReEnter Password" passwordState={reEnterSignUpPass} setPass={setReEnterSignUpPass} />
                            </div>
                            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                                <a className='cursor-pointer font-thin text-cyan-700' onClick={signUpHandler}>Already have an account? Sign in</a>
                                <button className='w-full md:w-auto p-6 font-sans font-bold text-white rounded-md shadow-sm px-9 
                    bg-cyan-700 shadow-cyan-100 hover:opacity-50 hover:shadow-lg transition hover:-translate-y-0.5 duration-150'>
                                    <span>SignUp</span>
                                </button>
                            </div>
                        </>)}
                </form>
                <div className="mt-12 border-b border-b-gray-300"></div>
                <p className="py-6 text-sm font-thin text-center text-gray-400">
                    {isSignIn ? "or login with" : "or sign up with"}
                </p>
                <div className=" flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                    <button className='items-center flex justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm
                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                        <img src={google} alt="google" className='w-9' />
                        <span className='font-thin'>
                            google
                        </span>
                    </button>

                    <button className='items-center flex justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm
                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
                        <img src={github} alt="google" className='w-9' />
                        <span className='font-thin'>
                            github
                        </span>
                    </button>
                </div>
            </div>

            {/* right size */}
            <img src={ima} alt="Water image" className='w-[430px] hidden md:block rounded-r-2xl' />
        </div >
    )
}

export default LoginForm