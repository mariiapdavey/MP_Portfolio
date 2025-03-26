import dotenv from 'dotenv'
import express from 'express'
import projects from './data/projects.js'
import connectDB from './config/db.js'

const app = express()
dotenv.config()

connectDB()

app.get('/api/projects', (req, res) => {
    res.json(projects)
})

app.get('/api/project/:id', (req, res) => {
    const project = projects.find(p => p._id === req.params.id)
    res.json(project)
})

app.listen(8000, console.log('Server is now running on port 8000'))