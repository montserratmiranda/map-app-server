import Idea from '../models/Idea.js';

//create new idea
export const createIdea = async (req, res)=> {
    const newIdea = new Idea(req.body);
    try {
        const savedIdea = await newIdea.save();
        res.status(201).json(savedIdea);
    } catch (error) {
        res.status(500).json(error);
    }
}
//get all ideas
export const getIdeas = async (req, res)=> {
    try {
        const allIdeas = await Idea.find();
         res.status(200).json(allIdeas);
    } catch (err) {
        res.status(504).json(err);
    }
};
//get one idea
export const getOneIdea = async (req, res)=> {
    try {
        const oneIdea = await Idea.findById(req.params.id);
         res.status(200).json(oneIdea);
    } catch (err) {
        res.status(504).json(err);
    }
};
//delete idea
export const deleteIdea = async (req,res) => {
    try {
       const idea = await Idea.findByIdAndDelete(req.params.id);
        res.status(200).json("The idea was deleted!");
    } catch (err){
        res.status(504).json("Oops, try again!");
    }
 };

//update idea
export const updateIdea = async (req,res) => {
    try{
        const idea = await Idea.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        });
        res.status(200).json("The Idea has been updated")
    }catch(err){
        return res.status(500).json(err)}
}

//like-dislike idea
export const likeIdea = async (req,res) => {
    try{
        const idea = await Idea.findById(req.params.id)
        if(!idea.likes.includes(req.body.userId)) {
            await idea.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("The Idea has been liked")
        } else{
            await idea.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The idea has been disliked");
        }
    
    }catch(err){
        return res.status(500).json(err)} 
}