import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const Project = ({project}) => {
  return (
    
        <Card className='my-1 p-3 rounded cards'>
            <Link to={`/project/${project._id}`}>
             <Card.Img src={project.image} variant='top'/>
            </Link>
            
            <Card.Body>
            <Link to={`/project/${project._id}`} className="seasons-light project-link">
                <Card.Title as='div'>
                    <strong>{project.name}</strong>
                </Card.Title>
            </Link>
                <Card.Text as='div' className='garamond-reg card-text'>
                    {project.description}
                </Card.Text>

            </Card.Body>
        </Card>
   
  )
}

export default Project