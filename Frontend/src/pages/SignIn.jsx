import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { signInStart,signInSuccess,signInFailure } from '../redux/User/userSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function SignIn() {
  const [formData,setFormData]=useState({});
 const {loading,error}= useSelector((state)=>state.user);
//  console.log(loading,error);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleSumbit=async(e)=>{
    e.preventDefault();
    try {
    dispatch(signInStart());
      const res= await fetch('/api/auth/signin',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const data= await res.json();
    
      if(data.success===false){
        dispatch(signInFailure(data))
        
        return
      }
      dispatch(signInSuccess(data))
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error))
    }
   
    
   





  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
      <form onSubmit={handleSumbit} className='flex flex-col gap-3 '>
        <input type='text' id='email' placeholder='email' className='bg-slate-200 p-3 rounded' onChange={handleChange}/>
        <input type='password' id='password' placeholder='password' className='bg-slate-200 p-3 rounded' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>{loading?'Loading...':'SIGN IN'}</button>
      </form>
      <div className='flex gap-2 mt-3'>
     <p>New User ?</p>
     <Link typeof='/sign-in'>         
     <span className='text-blue-400'>sign in</span>
      </Link>
     </div>
      <p className='text-red-600 mt-4'>{error ? error.message ||'Something went wrong !!!':''}</p>
    


    </div>
  )
}
