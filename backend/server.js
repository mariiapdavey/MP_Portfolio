import dotenv from 'dotenv'
import express from 'express'

import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()

connectDB()

app.use('/api/projects', projectRoutes)

app.use(errorHandler)
app.listen(8000, console.log('Server is now running on port 8000'))