import React, { useState } from 'react'
import "./Style.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Createuser = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [age,setAge]=useState();
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
    axios.post('http://localhost:4000/createuser',{name,email,age})
     .then(res=>{
        console.log(res.data)
        navigate('/')
     })
     .catch(err=>console.log(err))
    }
  return (
    <div className='userwrapper'>
    <div className='vh-100 bg-primary d-flex justify-content-center align-items-center usercontainer'>
        <div className='bg-white p-5 rounded w-50'>
            <form onSubmit={handlesubmit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter name' className='form-control mt-1'
                      onChange={(e)=>setName(e.target.value)}
                    value={name}/>
                </div>
                <div className='mb-2'>
                    <label>Email</label>
                    <input type='text' placeholder='Enter email' className='form-control mt-1'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label>Age</label>
                    <input type='text' placeholder='Enter age' className='form-control mt-1'
                    onChange={(e)=>setAge(e.target.value)}
                    value={age}/>
                </div>
                <button className='btn btn-success mt-4'>Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Createuser