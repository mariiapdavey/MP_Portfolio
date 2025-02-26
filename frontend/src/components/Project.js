import React from 'react'
import { Card, Button } from 'react-bootstrap'



const Project = ({project}) => {
  return (
    <Card className='my-3 p-3 rounded' style={{height: '90%'}}>
        <Card.Img src={project.image} variant='top'className="card-img-top"/>
        <Card.Body className="card-body">

            <Card.Title className='seasons-light'>
                <strong className='card-title'>{project.name}</strong>
            </Card.Title>

            <Card.Text className='garamond-reg card-text'>
                {project.description}
            </Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Project