import User from '../models/User.js';
import bcrypt from 'bcrypt';

//sign up
export const createUser = async (req, res)=> {
    const user = req.body;
    const newUser = new User(user);
    try {
        //generate secure password
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        //create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            nationality: req.body.nationality,
            password: hashedPassword,
        });
        //save user and send response
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(409).json(err)
    }
}

//login
export const loginUser = async (req, res)=> {
    try {
        //find user
        const user = await User.findOne({email:req.body.email})
        !user && res.status(400).json("Incorrect username or password");
        //validate password
        const validPass = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPass && res.status(400).json("Incorrect username or password");
        //send response
         res.status(200).json({_id: user._id, username: user.username });
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//get all users
export const getUsers = async (req, res)=> {
    try {
        const allUsers = await User.find();
         res.status(200).json(allUsers);
    } catch (err) {
        res.status(504).json(err);
    }
}
//update user
export const updateUser = async (req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(11);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err)}
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account has been updated")
        }catch(err){
            return res.status(500).json(err)}
    }else {
        return res.status(403).json("You can only update your account!")
    }
}
//delete user
export const deleteUser = async (req,res) => {
    try {
       const idea = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("The user account was deleted");
    } catch (err){
        res.status(504).json("Oops, try again!");
    }
}