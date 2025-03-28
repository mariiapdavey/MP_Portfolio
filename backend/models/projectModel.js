import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: true
    },
            
    technology: {
        type: String,
        required: false
    },

    year: {
        type: Number,
        requred: true
    },

    category: {
        type: String,
        required: false
    },

    link: {
        type: String,
        required: false
    },

    repository: {
        type: String,
        required: false
    }, 
}, {
    timestamps: true,
})

const Project = mongoose.model('projects', projectSchema)

export default Project