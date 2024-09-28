import React from 'react'
import { Link } from 'react-router-dom'
Link

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 '>Sign up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' id='username' placeholder='username' className='bg-slate-200 rounded-lg p-3'/>
        <input type='text' id='email' placeholder='email' className='bg-slate-200 rounded-lg p-3'/>
        <input type='password' id='password' placeholder='password' className='bg-slate-200 rounded-lg p-3'/>
        <button className='text-violet-100 bg-slate-800 p-3 rounded-lg hover:opacity-95 disabled:opacity-80 '>SIGN UP</button>
      </form>
     <div className='flex gap-2 mt-3'>
     <p>Not signed in yet ?</p>
     <Link typeof='/sign-up'>         
     <span className='text-blue-400'>signup</span>
      </Link>
     </div>
      
     
      

    </div>
  )
}
