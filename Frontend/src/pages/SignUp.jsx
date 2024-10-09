import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function SignUp() {
 const [formData, setformData] = useState({})
 const [loading,setLoading]=useState(false)
 const [error,setError]=useState(false)
  
 const navigate=useNavigate();
  const handleChange=(e)=>{
    
    setformData({...formData,[e.target.id]:e.target.value})
    
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      setError(false)
    const res= await fetch('/api/auth/signup',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData),
      })
    const data = await res.json();
    setLoading(false)
    if(data.success===false){
     setError(true)
     return
    }
    navigate('/sign-in');
    } catch (error) {
      setLoading(false)
      setError(true)
      

    }
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 '>Sign up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' id='username' placeholder='username' className='bg-slate-200 rounded-lg p-3' onChange={handleChange}/>
        <input type='text' id='email' placeholder='email' className='bg-slate-200 rounded-lg p-3' onChange={handleChange}/>
        <input type='password' id='password' placeholder='password' className='bg-slate-200 rounded-lg p-3' onChange={handleChange}/>
        <button disabled={loading} className='text-violet-100 bg-slate-800 p-3 rounded-lg hover:opacity-95 disabled:opacity-80 ' onChange={handleChange}>{loading?'...Loading':'SIGN UP'}</button>
      </form>
     <div className='flex gap-2 mt-3'>
     <p>Not signed in yet ?</p>
     <Link typeof='/sign-up'>         
     <span className='text-blue-400'>signup</span>
      </Link>
     </div>
      <p className='text-red-600 mt-4'>{error && 'Something went wrong !!!'}</p>
    </div>
  )
}
