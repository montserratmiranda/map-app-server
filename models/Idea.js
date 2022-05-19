import mongoose from 'mongoose';

const ideaSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    long: {
        type: Number,
        require: true,
    },
    lat: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true,
        enum: ['Arts', 'Sports', 'History', 'Geography', 'Social Studies', 'Food']
    },
    desc: {
        type: String,
        require: true,
    },
    materials: {
        type: String,
        require: true,
    },
    instructions: {
        type: String,
        require: true,
    },
    likes: {
        type: Array,
        default: [],
    }
},
{ timestamps: true}
);

const Idea = mongoose.model('idea', ideaSchema);
export default Idea;