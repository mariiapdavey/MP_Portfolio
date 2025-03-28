import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Project from './models/projectModel.js'
import projects from './data/projects.js'

dotenv.config()
connectDB()

const importData = async () =>{
    try{
        
    } catch (error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }

}
