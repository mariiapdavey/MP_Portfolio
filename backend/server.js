import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()

connectDB()

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}
app.use('/api/projects', projectRoutes)

const port = process.env.PORT
app.use(errorHandler)
app.listen(port, console.log('Server is now running on port ${port}'))