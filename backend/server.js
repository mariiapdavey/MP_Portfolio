import express from 'express'
import projects from './data/projects.js'

const app = express()

app.get('/api/projects', (req, res) => {
    res.json(projects)
})

app.get('/api/project/:id', (req, res) => {
    const project = projects.find(p => p._id === req.params.id)
    res.json(project)
})

app.listen(8000, console.log('Server is now running on port 8000'))