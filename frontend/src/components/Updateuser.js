import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Updateuser = () => {
    const {id}=useParams()
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [age,setAge]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
            axios.get('http://localhost:4000/getuser/'+id) 
            .then(res=>{
                console.log(res)
                setName(res.data.name)
                setEmail(res.data.email)
                setAge(res.data.age)
               
             })
             .catch(err=>console.log(err))
    },[])
    const handleupdate=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:4000/updateuser/'+id,{name,email,age})
        .then(res=>{
           console.log(res)
        })
        .catch(err=>console.log(err))
        
    }
    const handleclick=()=>{
     navigate('/')

 }
  return (

    <div className='vh-100 bg-primary d-flex justify-content-center align-items-center usercontainer'>
    <div className='bg-white p-5 rounded w-50'>
        <form onClick={handleupdate}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label>Name</label>
                <input type='text' placeholder='Enter name' className='form-control mt-1'
                  value={name}
                onChange={(e)=>setName(e.target.value)}
              
                />
            </div>
            <div className='mb-2'>
                <label>Email</label>
                <input type='text' placeholder='Enter email' className='form-control mt-1'  value={email}   onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label>Age</label>
                <input type='text' placeholder='Enter age' className='form-control mt-1'  value={age}   onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success mt-4 ' onClick={handleclick}>Update</button>
        </form>
    </div>
</div>
  )
}

export default Updateuser