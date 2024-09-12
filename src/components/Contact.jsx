import React from 'react'
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ContactCard from './ContactCard';
import toast from 'react-hot-toast';
import { addContact} from '../services/Allapis';

function Contact() {
  const [show, setShow] = useState(false);

  const [contact, setContact] = useState({
    name: "", mobile: ""
  })

  const [refresh,setRefresh]=useState("")


  const handleContact = async () => {

    const { name, mobile } = contact
    if (!name || !mobile) {
      toast.error("Enter Valid inputs")
    } else {
      const res = await addContact(contact)
      // console.log(res)
      handleClose()
      if (res.status == 201) {
        setRefresh(res.data)
        toast.success("Contact Added")
        setContact({ name: "", mobile: "" })
       
      } else {
        toast.error("Contact Adding Failed ")
        console.log(res)
      }
    }
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='container-fluid p-3 border shadow rounded mb-4 '>
        <div className='d-flex justify-content-between'>
          <h4>All Contacts</h4>
          <button className='btn btn-success' onClick={handleShow}>Add +</button>
        </div>

        <div className='d-flex row justify-content-center ' style={{ margin: "20px 20px" }}>
          <ContactCard depend={refresh} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="" label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Password" onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="" label="Mobile" className="mb-3">
            <Form.Control type="phone" placeholder="" onChange={(e) => { setContact({ ...contact, mobile: e.target.value }) }} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleContact}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Contact