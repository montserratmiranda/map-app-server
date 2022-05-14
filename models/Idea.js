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
    lat: {
        type: Number,
        require: true,
    },
    long: {
        type: Number,
        require: true,
        min: 8,
    },
    category: {
        type: Number,
        require: true,
        enum: [1,2,3,4,5,6,7]
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