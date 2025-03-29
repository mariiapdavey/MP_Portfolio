import dotenv from 'dotenv'
import express from 'express'

import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'

const app = express()
dotenv.config()

connectDB()

app.use('/api/projects', projectRoutes)

app.listen(8000, console.log('Server is now running on port 8000'))