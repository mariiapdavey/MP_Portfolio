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
                  <p class="indented">
                    Hi, I’m Mariia Pozhar — a full-stack web developer, lifelong musician, and operations leader with a passion for building things that matter. I grew up in Odessa, Ukraine, where I studied music and spent over 10 years performing as a jazz and contemporary vocalist. Creativity has always been at the heart of what I do—whether it’s through music, leading teams, or writing clean, intuitive code.
                  </p>

                  <p class="indented">
                    My husband and I built one of Odessa’s most beloved hostel networks, including the Babushka Grand Hostel, which was named one of the 20 coolest hostels in Europe. After moving to the U.S. in 2014, I transitioned into nonprofit leadership, eventually serving as Director of Operations at Tacoma Refugee Choir — an organization that uses music to connect and empower people from all walks of life.
                  </p>

                  <p class="indented">
                    In recent years, I’ve fallen in love with tech and completed a Full-Stack Web Development Bootcamp at Kal Academy. I now create web applications using HTML, CSS, JavaScript, React, and Angular — with a focus on user experience, clean design, and meaningful function.
                  </p>

                  <p class="indented">
                    When I’m not coding or writing music, you’ll usually find me BBQing with my family, exploring the beautiful Pacific Northwest, or working on a DIY project around the house.
                  </p>

                  </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>

          {/* Image Card */}
          <Col md={4} className="order-1 order-md-2 d-flex flex-column">
            <Card>
              <img src='/images/MP_photo.jpg' alt="Mariia Pozhar" className="image-card" />
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