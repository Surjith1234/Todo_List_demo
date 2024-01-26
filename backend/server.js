const express=require('express')
const app=express();
const mongoose=require('mongoose')
const cors=require('cors');
const user = require('./models/user');
app.use(cors())
app.use(express.json())
require('dotenv').config()
let mongo=async()=>{
    await mongoose.connect(process.env.MONGO)
}
app.post('/createuser',(req,res)=>{
    user.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})
app.get('/',(req,res)=>{
   user.find({})
   .then(users=>{
    res.json(users)
   })
   .catch(err=>{
    res.json(err)
   })
})
app.get('/getuser/:id',(req,res)=>{
    const id=req.params.id;
   user.findById({_id:id})
   .then(users=>{
    res.json(users)
   })
   .catch(err=>{
    res.json(err)
   })
})
app.put('/updateuser/:id',(req,res)=>{
    const id=req.params.id;
    user.findByIdAndUpdate({_id:id},{...req.body})
    .then(users=>{
        res.json(users)
       })
       .catch(err=>{
        res.json(err)
    })
})
app.delete('/deleteuser/:id',(req,res)=>
{
    const id=req.params.id;
    user.findByIdAndDelete({_id:id})
    .then(users=>{
        res.json(users)
       })
       .catch(err=>{
        res.json(err)
    })
})
mongo().catch(err=>{
    console.log(err.message)
})
.then(()=>{
    console.log("successfully connected")
})
app.listen(4000,()=>{
    console.log("server is running");
})