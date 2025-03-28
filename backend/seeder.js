import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Project from './models/projectModel.js'
import projects from './data/projects.js'

dotenv.config()
connectDB()

const importData = async () =>{
    try{
        await Project.deleteMany()

        await Project.insertMany(projects)

        console.log('Data imported!')
        process.exit(1)
    } catch (error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Project.deleteMany()

        console.log('Data destroyed!')
        process.exit(1)

    } catch {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}