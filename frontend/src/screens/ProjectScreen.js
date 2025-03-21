import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap';
import projects from '../projects';

const ProjectScreen = () => {
  const params = useParams();
  const project = projects.find(p => p._id === params.id)


  return (
    <>
    <Link className ='btn btn-secondary text-dark my-3' to='/'>
      Go Back
    </Link>
    <Row>
      <Col md={5}>
        <Image src={project.image} alt={project.name} fluid />
      </Col>

      <Col md={7}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{project.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Technology: </strong>{project.technology}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Year:</strong> {project.year}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Category:</strong> {project.category}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {project.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Link:</strong> {project.link}
          </ListGroup.Item>

        </ListGroup>
      
      </Col>
    </Row>


    </>
  )
}

export default ProjectScreen