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
                    Hi, I'm Mariia Pozhar — a full-stack web developer, former operations leader, and lifelong artist with a global story and a passion for building meaningful experiences.
                  </p>

                  <p class="indented">
                    I was born and raised in Odessa, Ukraine, where I graduated from Odessa Musical College and spent over a decade performing as a professional jazz and contemporary vocalist. Music remains a core part of who I am—I continue to write, record, and share original music that reflects my journey and creative voice.
                  </p>

                  <p class="indented">
                    My husband and I built one of the most beloved hostel networks in Odessa, including the Babushka Grand Hostel, named one of the top 20 coolest hostels in Europe. Following the 2014 crisis in Ukraine, we were forced to close most of our locations, but thanks to the strength of our family, the original hostel remained open for several more years—even during incredibly turbulent times.
                  </p>

                  <p class="indented">
                    After relocating to the U.S., I transitioned into operations and leadership roles—most recently serving as Director of Operations at Tacoma Refugee Choir, a nonprofit using music as a bridge across cultures. There, I developed internal systems, improved processes, and helped build a thriving community.
                  </p>

                  <p class="indented">
                    Now, after completing a Full-Stack Web Development Bootcamp at Kal Academy, I’m excited to combine my creativity, technical skills, and people-first mindset in a new career. I build web applications with HTML, CSS, JavaScript, React, and I’m passionate about clean, intuitive user experiences that empower and connect people.
                  </p>

                  <p class="indented">
                    When I’m not coding, you’ll find me spending time with my family, BBQing, exploring the beautiful Pacific Northwest, or building and fixing things—whether that’s home projects, tools, or new ideas.
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