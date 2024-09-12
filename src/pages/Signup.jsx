import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { checkEmail,addUser } from '../services/Allapis';
import { useNavigate } from 'react-router-dom';
import './Sign.css'


function Signup() {

    const [user,setUser]=useState({
        username:"",email:"",password:""
    })
    const nav=useNavigate()
    
    const handleUser=async()=>{
        const {username,email,password}=user
        if(!username || !email || !password){
            toast.error("Enter Valid Inputs")
        }else{
            const res=await checkEmail(user.email)
            // console.log(res)
            if(res.data.length > 0){
                toast.error("Email Already In Use")
            }else{
                const result=await addUser(user)
                // console.log(result)
                if(result.status==201){
                    toast.success("Signup Completed")
                    setUser({ username:"",email:"",password:""})
                    nav("/log")
                }else{
                    toast.error("Something went wrong")
                }
                
            }
            
        }
    }



  return (
    <>
       <div className='container-fluid d-flex justify-content-center align-items-center hdiv' >
                <div className='fdiv   text-center' style={{border:"2px solid white",borderRadius:"30px"}}>
                    <h3 className='text-center mb-3'>Signup</h3>
                    <FloatingLabel controlId="username" label="Username">
                        <Form.Control type="text" placeholder="Password" className='mb-3' onChange={(e)=>{setUser({...user,username:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="email" label="Email ID">
                        <Form.Control type="email" placeholder="Password" className='mb-3' onChange={(e)=>{setUser({...user,email:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="password" label="Password">
                        <Form.Control type="password" placeholder="Password" className='mb-3'  onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
                    </FloatingLabel>

                    
                        <button className='btn btn-success me-3' onClick={handleUser}>Signup</button>
                        <p className='mt-3'>Already Have Account ? <Link to={"/log"}>Login</Link> </p>
              

                </div>
            </div>
    </>
  )
}

export default Signup