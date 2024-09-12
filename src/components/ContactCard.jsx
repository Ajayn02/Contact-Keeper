import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { deleteContact, getContact, editContact } from '../services/Allapis';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { json } from 'react-router-dom';


function ContactCard({ depend }) {

  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({
    name: "", mobile: "", id: ""
  })


  useEffect(() => {
    displayContact()
  }, [depend])

  const displayContact = async () => {
    const result = await getContact()
    if (result.status == 200) {
      setData(result.data)
    } else {
      console.log(result)
    }
  }

  const handleDelete = async (id) => {
    const res = await deleteContact(id)
    if (res.status == 200) {
      toast.success("Deleted")
      displayContact()
    } else {
      console.log(res)
    }
  }
  const handleClose = () => setShow(false);

  const handleShow = (data) => {
    setShow(true)
    // console.log(data)
    setEdit({ ...edit, name: data.name, mobile: data.mobile, id: data.id })
    // console.log(edit);
  }
  const editCard = async (id, data) => {

    const { name, mobile } = data
    if (!name || !mobile) {
      toast.error("Enter Valid Inputs")
    } else {
      const result1 = await editContact(id, data)
      // console.log(result1);
      if (result1.status == 200) {
        toast.success("Update Success")
        handleClose()
        setEdit({ name: "", mobile: "", id: "" })
        displayContact()
      } else {
        toast.error("Update Failed")
      }
    }
  }

  const handleDrag=(e,data)=>{
    // console.log(e)
    // console.log(data);
    e.dataTransfer.setData("cntct",JSON.stringify(data))
    
  }

  return (
    <>
      {
        data.length > 0 ?

          data.map(item => (
            <Card key={item.id} style={{ width: '14rem', margin: "20px",cursor:"pointer",backgroundColor:"rgb(37, 37, 38)" }} onDragStart={(e)=>{handleDrag(e,item)}} draggable>
              <Card.Body className='text-center'>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.mobile}</Card.Text>
                <button className='btn btn-tertiary btn-outline-dark me-3' onClick={() => { handleShow(item) }}><i className="fa-solid fa-pen-to-square" style={{ color: "#ffff", }} /></button>
                <button className='btn btn-tertiary btn-outline-danger' onClick={() => { handleDelete(item.id) }}><i className="fa-solid fa-trash-can" style={{ color: "#e23636", }} /></button>
              </Card.Body>
            </Card>
          ))
          :
          <h3 className='text-center text-danger'>No Contact Added</h3>
      }


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="name" label="Name">
            <Form.Control type="text" placeholder="" className='mb-3' value={edit.name} onChange={(e) => { setEdit({ ...edit, name: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="mobile" label="mobile">
            <Form.Control type="phone" placeholder="" className='mb-3' value={edit.mobile} onChange={(e) => { setEdit({ ...edit, mobile: e.target.value }) }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { editCard(edit.id, edit) }}>Update</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default ContactCard