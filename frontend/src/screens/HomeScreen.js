import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import projects from '../projects'
import Project from '../components/Project'

const HomeScreen = () => {
  return (
    <>
        <h1 className='garamond-reg mt-3'>
            <strong>My Projects</strong>
        </h1>

        
        <Row className='g-3'>
            {projects.map(p => (
                <Col sm={12} md={6} lg={4} xl={4}>
                    <Project project={p} />
                </Col>
            ))}
        </Row>
        
            
            
    </>
    
  )
}

export default HomeScreen