import React, { useState, useRef } from "react";
import WithLayout from "../HOC/WithLayout";
import Link from 'next/link'
import { useAuth } from "../contexts/UserContext"

function Signup() {
  const unameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const [unameError, setUnameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const [confirmPassError, setConfirmPassError] = useState(null);

  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    setUnameError(unameRef.current.value == "" ? "* Username Field is Required" : null);
    setEmailError(emailRef.current.value == "" ? "* Email Field is Required" : null);
    setPassError(passRef.current.value == "" ? "* Password Field is Required" : null);
    setConfirmPassError(
      confirmPassRef.current.value == "" ? "* Confirm Password Field is Required" : 
      confirmPassRef.current.value != passRef.current.value ? "Confirm Password is Not Matched!" : null
    );

    if (unameError == null && emailError == null && passError == null && confirmPassError == null) {
      console.log("ok hai")
      console.log(unameError, emailError, passError, confirmPassError, "inner");
    }
  }

  return (
    <>
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">BKR BLOG</h1>
        <form className="mt-6" onSubmit={handleSubmit}>            
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
            <input id='username' type="text" ref={unameRef} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          {unameError && <b className='text-sm text-red-500'>{unameError}</b>}

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input id='email' type="email" ref={emailRef} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          {emailError && <b className='text-sm text-red-500'>{emailError}</b>}

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
            <input id='password' type="password" ref={passRef} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          {passError && <b className='text-sm text-red-500'>{passError}</b>}

          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
            <input id='confirmPassword' type="password" ref={confirmPassRef} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          {confirmPassError && <b className='text-sm text-red-500'>{confirmPassError}</b>}
          
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Register
            </button>
          </div>
        </form>
        
        <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account?  
        <Link href='/login'>
          <a className="font-medium text-gray-700 dark:text-gray-200 hover:underline"> Login</a>
        </Link>
        </p>
      </div>
    </>
  );
}

export default WithLayout(Signup, {title: "Signup"});