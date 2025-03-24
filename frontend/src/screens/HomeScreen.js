import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Project from '../components/Project'

const HomeScreen = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const {data} = await axios.get('/api/projects') 
      setProjects(data)
    }

    fetchProjects()
  })

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