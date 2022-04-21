import mongoose from 'mongoose';

const markerSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    contryName: {
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
    description: {
        type: String,
        require: true,
    },
    imageUrl: String,
},
{ timestamps: true}
);

const Marker = mongoose.model('marker', markerSchema);
export default Marker;