import Marker from '../models/Marker.js';

//create marker
export const createMarker = async (req, res)=> {
    const newMarker = new Marker(req.body);
    try {
        const savedMarker = await newMarker.save();
        res.status(201).json(savedMarker);
    } catch (error) {
        res.status(500).json(error);
    }
}
//get all markers
export const getMarkers = async (req, res)=> {
    try {
        const allMarkers = await Marker.find();
         res.status(200).json(allMarkers);
    } catch (err) {
        res.status(504).json(err);
    }
}
//update marker
export const updateMarker = async (req,res) => {
        try{
            const marker = await Marker.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Marker has been updated")
        }catch(err){
            return res.status(500).json(err)}
    }

//delete marker
export const deleteMarker = async (req,res) => {
    try {
       const marker = await Marker.findByIdAndDelete(req.params.id);
        res.status(200).json("The marker was deleted");
    } catch (err){
        res.status(504).json("Oops, try again!");
    }
}