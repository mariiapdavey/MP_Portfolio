import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="custom-gradient">
        <Container>
            <Row>
                <Col className="text-center py-3"> &copy; Copyright 2025 Mariia Pozhar</Col>
            </Row>
        </Container>
    </footer>
   
  )
}

export default Footer