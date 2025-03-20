const express = require('express')
const projects = require('./data/projects')

const app = express()

app.get('/api/projects', (req, res) => {
    res.json(projects)
})

app.get('/api/project/:id', (req, res) => {
    const project = projects.find(p => p.id === req.params.id)
    res.json(project)
})

app.listen(5000, console.log('Server is now running on port 5000'))