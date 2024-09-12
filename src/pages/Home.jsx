import React,{useEffect,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Contact from '../components/Contact'
import Category from '../components/Category'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [user,setUser]=useState([])

    const nav=useNavigate()
    
    useEffect(()=>{
       
        const loginUser = JSON.parse(sessionStorage.getItem("userData"))
        // console.log(loginUser);
        if(loginUser){
            nav("/home")
            setUser(loginUser?.username)
        }else{
            nav("/")
        }
        
    },[])

   const setLogout=()=>{
     sessionStorage.removeItem("userData")
     nav("/")
   }
    
  return (
    <>
        <div className='container-fluid p-4' style={{minHeight:"80vh"}}>
            <Row>
                <Col lg={9} md={8} sm={12}>
                    <div className='container-fluid d-flex my-4 p-0 justify-content-between'>
                        <h4>Welcom {user} </h4>
                        <button className='btn btn-secondary'onClick={setLogout}>Logout</button>
                    </div>
                    <Contact/>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <Category/>
                </Col>
            </Row>
        </div>
    
    </>
  )
}

export default Home