import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Container, Row, Button } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <>
      <Link className='btn btn-link text-dark' to='/'>
        Go Back
      </Link>

      <Container fluid className="full-screen">
        <Row className='align-items-stretch'>
          
          {/* About Card */}
          <Col md={8} className="order-2 order-md-1">
            <Card className='my-1 p-3 rounded cards'>
              <Card.Body className="d-flex flex-column">
                
                  <Card.Title as='div' className='seasons-light'>
                    <strong>About</strong>
                  </Card.Title>

                  <Card.Text as='div' className='garamond-reg card-text2'>
                    Section about Mariia Pozhar
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>

          {/* Image Card */}
          <Col md={4} className="order-1 order-md-2 d-flex flex-column justify-content-center align-items-center">
            <Card>
              <img src='/images/MP_icon.png' alt="Mariia Pozhar" className="image-card" />
            </Card>
            
            <a
            className='btn btn-secondary text-dark my-3 w-100'
            href='mailto:mariiapdavey@gmail.com'
            >
                SEND ME A NOTE
            </a>
            
          </Col>
          
        </Row>
      </Container>
    </>
  )
}

export default AboutScreen