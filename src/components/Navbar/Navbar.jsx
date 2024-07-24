import React, { useContext, useEffect } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Mobile App', href: '/mobile-app' },
  { name: 'Contact Us', href: '/contact-us' },
]
function Navbar({setShowLogin}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {cartItems,cartCount} = useContext(StoreContext);
    
    useEffect(() => {
      console.log(cartCount);
    },[cartItems])

  return (
    <header className="bg-white">
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link to={'/'} className="-m-1.5 p-1.5">
          <span className="sr-only">Logo</span>
          <img alt="" src={assets.logo} className="h-8 w-auto" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-end gap-x-6">
        <button 
        onClick={() => setShowLogin(true)}
        className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
          Log in
        </button>
        <Link
          to='/cart'
          className="relative rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <img src={assets.basket_icon} />
          <p className='text-red-600 absolute top-0 right-0 font-bold'>{cartCount}</p>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center gap-x-6">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={assets.logo}
              className="h-8 w-auto"
            />
          </Link>
          <a
            href="#"
            className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <button
                onClick={() => setShowLogin(true)}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  )
}

export default Navbar