import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        min: 6,
        max:20,
        unique:true,
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    nationality: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    profilePicture: {
        type: String,
        default:""
    },
    likes: {
        type: Array,
        default: ""
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
},
{ timestamps: true}
);

const User = mongoose.model('user', userSchema);
export default User;