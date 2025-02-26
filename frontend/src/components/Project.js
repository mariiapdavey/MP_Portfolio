import React from 'react'
import { Card, Button } from 'react-bootstrap'



const Project = ({project}) => {
  return (
    <Card className='my-5 p-3 rounded' style={{height: '80%'}}>
        <Card.Img src={project.image} variant='top'className="card-img-top"/>
        <Card.Body className="card-body">

            <Card.Title className='seasons-light card-title'>
                <strong>{project.name}</strong>
            </Card.Title>

            <Card.Text className='garamond-reg card-text'>
                {project.description}
            </Card.Text>

            <div className="mt-auto">  {/* Pushes this to the bottom */}
                <Button type="button" className="btn btn-link">View Project</Button>
            </div>

        </Card.Body>
    </Card>
  )
}

export default Project