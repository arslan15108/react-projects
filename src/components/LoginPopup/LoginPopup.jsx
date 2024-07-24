import React, { useState } from 'react'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

    const [logStatus,setLogStatus] = useState("login")

  return (
<div className="h-full w-full flex items-center px-6 py-12 lg:px-8 bg-[rgba(0,0,0,0.7)] fixed top-0 z-10">
       <div className='bg-white mx-auto w-full sm:w-2/5 rounded-lg shadow-md py-8 relative'>
       <button onClick={()=> {setShowLogin(false)}} className='absolute right-5 top-5'>
         <img src={assets.cross_icon} />
       </button>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={assets.logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            { logStatus === "signup" ? "Create New Account" : "Sign in to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {logStatus === "signup" 
            ?<div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> 
            : "" }

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                { logStatus === 'signup' ? "Create Account" : "Login"}
              </button>
            </div>
          </form>
         {
            logStatus === "signup" 
            ?<p className="mt-10 text-center text-sm text-gray-500">
                already have an account? 
                <button onClick={()=>setLogStatus("signin")} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                click to login
                </button>
            </p>
           :<p className="mt-10 text-center text-sm text-gray-500">
          create a new account? 
          <button onClick={()=>{setLogStatus("signup")}} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            click here
          </button>
        </p>
          
         }

        </div>
       </div>
      </div>
  )
}

export default LoginPopup