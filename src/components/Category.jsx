import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, getCategory,deleteCatagory,updateCat } from '../services/Allapis';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Category() {
  const [show, setShow] = useState(false);
  const [cat, setCat] = useState({
    categoryID: "", name: "", cdata: []
  })
  const [catData, setCatData] = useState([])
  const [reload,setReload]=useState("")

  useEffect(() => {
    displayCat()
  }, [reload])

    const nav=useNavigate()



  const handleCat = async () => {
    const { categoryID, name } = cat
    if (!categoryID || !name) {
      toast.error("Enter Valid Inputs")
    } else {
      handleClose()
      const res = await addCategory(cat)
      // console.log(res);
      if (res.status == 201) {
        setReload(res.data)
        toast.success("category Added")
        setCat({ categoryID: "", name: "", cdata: [] })
      } else {
        toast.error("Category Adding Failed")
      }
    }

  }

  const displayCat = async () => {
    const result = await getCategory()
    if (result.status == 200) {
      setCatData(result.data)
    }
  }

  const deleteCat=async (id,data)=>{
    const result2= await deleteCatagory(id)
    if(result2.status==200){
      toast.success(`${data.name} deleted`)
      displayCat()
    }else{
      toast.error("Deletion Failed")
    }
  }

  const handleView=(id)=>{
    localStorage.setItem("id",JSON.stringify(id))
      nav('/view')
  }

  const handleDragOver=(e)=>{
    // console.log(e);
    e.preventDefault()
  }

  const handleDrop=async(e,details)=>{
    // console.log(e);
    // console.log(details);
    const contactDetails=JSON.parse(e.dataTransfer.getData("cntct"))
    // console.log(contactDetails);
    details.cdata.push(contactDetails)
    // console.log(details);
    // console.log(details.id);
    
    const res2=await updateCat(details.id,details)
    // console.log(res2);
    if(res2.status==200){
      toast.success("Added")
    }else{
      toast.error("Adding Failed")
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='container-fluid p-3 '>
        <div className='d-flex justify-content-between ms-2 mb-3'>
          <h5 className='text-center'>Category</h5>
          <button className='btn btn-success' onClick={handleShow}>Add +</button>
        </div>
        {
          catData.length > 0 ?
            catData.map((item) => (
              <div key={item.id} className='text-center   rounded p-3 'style={{marginTop:"30px",backgroundColor:"rgb(37, 37, 38)"}} onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>{handleDrop(e,item)}}>
                <h4 className='pt-2'>{item.name}</h4>
                <div className='d-flex mt-4 px-2 justify-content-center'>
                  <button className='btn btn-tertiary btn-primary  me-3 ' onClick={()=>{handleView(item.id)}}>View</button>
                  <button className='btn btn-tertiary btn-outline-danger px-4' onClick={()=>{deleteCat(item.id,item)}}><i className="fa-solid fa-trash-can" style={{ color: "red ", }} /></button>
                </div>
              </div>
            ))

            :
            <h6>No Category Added</h6>
        }


      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="" label="Category ID" className="mb-3">
            <Form.Control type="number" placeholder="Password" onChange={(e) => { setCat({ ...cat, categoryID: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="" label="Category Name" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e) => { setCat({ ...cat, name: e.target.value }) }} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCat}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category