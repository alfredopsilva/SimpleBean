import Image from 'next/image'
import React from 'react'
import Logo from '@/public/images/Logo.png'
import Link from 'next/link'

export default function SingUp() {
  return (
    <main className='px-6 py-2' >
      <header className='w-full flex justify-center items-center'>
        <Link href={"/"}>
          <Image src={Logo} alt='Simple Bean Logo' width={96} />
        </Link>
      </header>
      <h5 className='uppercase text-2xl text-center mt-10'>Create your account</h5>
      <form method='POST' action={"#"} className='mt-10'>
        <div className='flex flex-col'>
          <div className='flex gap-2 mt-2'>
            <div className="relative w-1/2">
              <input type="text" id="firstName" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
              <label htmlFor="firstName" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name</label>
            </div>
            <div className="relative w-1/2">
              <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
              <label htmlFor="email" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last Name</label>
            </div>
          </div>
          <div className="relative mt-6">
            <input type="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
            <label htmlFor="phone" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone</label>
          </div>
          <div className="relative mt-6">
            <input type="text" id="address" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
            <label htmlFor="phone" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Address</label>
          </div>
          <div className='flex gap-2 mt-6'>
            <div className="relative w-1/2">
              <input type="text" id="city" 
                className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
              <label htmlFor="city" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">City</label>
            </div>
            <div className="relative w-1/2">
              <input type="text" id="postalCode" pattern='^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]\s?\d[ABCEGHJKLMNPRSTVWXYZ]\d$' className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
              <label htmlFor="postalCode" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Postal Code</label>
            </div>
          </div>
          <div className="relative mt-12">
            <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
            <label htmlFor="email" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
          </div>
          <div className='flex gap-2 mt-6'>
            <div className="relative w-1/2">
              <input type="password" id="password" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
              <label htmlFor="password" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            </div>
            <div className="relative w-1/2">
              <input type="password" id="password" className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/60 appearance-none dark:text-white dark:border-offWhite/50 dark:focus:border-offWhite focus:outline-none focus:ring-0 focus:border-accentColor/80 peer" placeholder=" " />
              <label htmlFor="password" className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-softBlack/60 peer-focus:dark:text-softBlack/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            </div>
          </div>
          <div className='flex flex-col my-12 gap-4 w-full'>
            <button type='submit' className='w-full bg-softBlack text-offWhite px-6 py-3 rounded text-sm hover:bg-accentColor/80 duration-300'>Login</button>
            <button type='reset' className='w-full border border-softBlack text-softBlack px-6 py-3 rounded text-sm hover:bg-accentColor/80 duration-300 hover:text-offWhite'>Reset</button>
          </div>
        </div>
      </form>
    </main>
  )
}
