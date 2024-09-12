import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { getCatCard } from '../services/Allapis';
import { useNavigate } from 'react-router-dom';

function CategoryCard() {

  useEffect(() => {
    displayData()
  }, [])

  const [catCardData, setCatCardData] = useState([])
  const [catName,setCatName]=useState([])

  const nav=useNavigate()

  const displayData = async () => {
    const catID = localStorage.getItem("id")
    // console.log(catID);
    const res = await getCatCard(catID)
    // console.log(res);
    if (res.status == 200) {
      // localStorage.removeItem("id")
      // console.log(res.data);
      setCatCardData(res.data[0].cdata)
      setCatName(res.data[0])
    }

  }

// console.log(catCardData);
// console.log(catName.name);

const handleBack=()=>{
    nav("/home")
}

  return (
    <>
      <div className='container p-5' style={{minHeight:"80vh"}}>
        <div className='d-flex justify-content-between'>
          {
            catName ?
            <h4>Category : {catName.name}  </h4>
            :
            <span>Category</span>
           
          }
          <button className='btn btn-info ' onClick={handleBack}>Go Back</button>
        </div>

        <div className='mt-4'>

          {
            catCardData.length > 0 ?
          
            <Table responsive className='table-bordered text-center table table-hover table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {
                catCardData.map(item=>(
                  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                </tr>
                ))
              }
                 
            </tbody>
          </Table>
          :

          <h3 className='text-center text-danger'>No Data Added</h3>
        
          }
       

              
           
       

        </div>

      </div>
    </>
  )
}

export default CategoryCard