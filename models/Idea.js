import mongoose from 'mongoose';

const ideaSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    countryID: {
        type: Number,
        require: true,
    },
    category: {
        type: Number,
        require: true,
        enum: [1,2,3,4,5,6,7]
    },
    ideaBackground: {
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
    imageUrl: {
        type: String,
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