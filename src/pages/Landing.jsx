import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./Landing.css"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Landing() {
  return (
    <>

      {/* section-1 */}

      <div className='container-fluid main1' >
        <Row >
          <Col md={12} lg={6} sm={12}>
            <div className='container py-5' >
              <h3 className='' >Manage Your Network,<br /> Amplify Your Life</h3>
              <p className='' style={{ textAlign: "justify" }}>Streamline your connections with ContactKeeper, the ultimate contact management solution. Easily add, organize, and sync your contacts across all devices. Say goodbye to cluttered address books and lost business cards. Our intuitive app allows you to seamlessly import contacts from social media, email, and phone directories, and automatically updates contact information as changes occur. With advanced search and filtering capabilities, you'll never miss a connection.</p>
              <div className='d-flex'>
                <Link className='btn btn-success me-3' to={"/log"}>Login</Link>
                <Link className='btn btn-info' to={"/sign"}>Signup</Link>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} sm={12} className='p-3 '>
            <div className=''><img src="https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg?t=st=1726067876~exp=1726071476~hmac=6a11d21a5eaa50201e981df50c1132a6a1933b6b3393a83ae19beb2a4b2d6f02&w=826" alt="" width={"100%"} className='rounded' /></div>
          </Col>
        </Row>
      </div>

      {/* section-2 */}
      <div className='container-fluid ' style={{ margin: "70px 0px" }}>

        <h3 className='text-center my-3'>Features</h3>

        <div className='row d-flex ' style={{ justifyContent: "space-evenly" }} >
          <div className='col col-lg-4 col-md-4 col-sm-12' style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: '18rem', marginTop: "30px" }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/insert-block-concept-illustration_114360-4106.jpg?t=st=1726077006~exp=1726080606~hmac=bb2f599fa77eabd947894c0b06c00c2b6d1cf149d33d68209a96695b4083b934&w=740" height={"200px"} style={{ width: "100%" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Smart Contact Organization</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>

          <div className='col col-lg-4 col-md-4 col-sm-12' style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: '18rem', marginTop: "30px" }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/virtual-gym-from-home-concept_23-2148509490.jpg?t=st=1726074021~exp=1726077621~hmac=a13965a8bcad0e154f460a79a952ddd06c30768cc174831cc089d9f5eb941000&w=826" height={"200px"} style={{ width: "100%" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Seamless Syncing and Backup</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>

          <div className='col col-lg-4 col-md-4 col-sm-12' style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: '18rem', marginTop: "30px" }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-vector/personal-portfolio-with-profile-data-self-improvement-attract-clients-hand-drawn-illustration_2175-10432.jpg?w=826" height={"200px"} style={{ width: "100%" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Enhanced Communication and Integration</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Landing