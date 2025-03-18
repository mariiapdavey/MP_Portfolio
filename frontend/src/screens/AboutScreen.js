import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, Container, Row} from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <>
    <Link className ='btn btn-link text-dark' to='/'>
      Go Back
    </Link>

   <Container fluid className="full-screen">
        <Row className='align-items-stretch h-100'>
            <Col md={7}>
                <Card className='my-1 p-3 rounded cards h-100'>
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                        <Card.Title as='div' className='seasons-light'>
                            <strong>About</strong>
                        </Card.Title>
                        <Card.Text as='div' className='garamond-reg card-text'>
                            Section about Mariia Pozhar 
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={5}>
                <Card className="image-card">
                    <img src='/images/MP_icon.png' alt="Mariia Pozhar" className="w-100"/>
                </Card>
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default AboutScreen