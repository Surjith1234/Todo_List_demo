import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Style.css"
import axios from 'axios';
const User = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000')
        .then(res=>{
            setUser(res.data)
            console.log(res)
        })
        .catch(err=>{
            console.log(Error)
        })
    })
    const handledelete=(id)=>{
        axios.delete('http://localhost:4000/deleteuser/'+id)
        .then(res=>{
            
            console.log(res)
        })
        .catch(err=>{
            console.log(Error)
        })
    }
  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
      <div className='bg-white rounded w-50 p-4'>
        <Link to='/create' className='btn btn-success'>Add</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user&&user.map((user)=>(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/update/${user._id}`} className='btn btn-success'>Edit </Link>
                            <button className='btn btn-danger tablebutton ms-2' onClick={()=>handledelete(user._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default User