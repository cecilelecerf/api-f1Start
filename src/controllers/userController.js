const User = require ("../models/userModel");
const jwt = require("jsonwebtoken");

exports.userRegister = async(req, res)=>{
    try{
        let newUser = new User(req.body);
        let user = await newUser.save();
        res.status(201).json({message: `User crée ${user.email}`})
    } catch (error){
        console.log(error);
        res.status(401).json({message: "Requete invalide"})
    }
}

exports.userLogin= async (req,res)=>{
    try {
        const user = await User.findOne({email : req.body.email});
        // user n'existe pas
        if(!user){
            console.log(error);
            res.status(500).json({message : "utilisateur non trouvé"});
            return;
        }
        if(user.email === req.body.email && user.password === req.body.password){
            const userData = {
                id : user._id,
                email : user.email,
                role : "admin"
            };
            const token = await jwt.sign(userData, process.env.JWT_KEY, {expiresIn : "10h"});
            res.status(200).json({token})
        }
        else {
            res.status(401).json({message: "Email ou mot de passe incorrect"});
        }                
    } catch(error){
        console.log(error);
        res.status(500).json({message : "Une erreur s'est produite lors du traitement du formulaire"})
    }
}

exports.listenAllUsers = async(_req, res) =>{
    try{
        const users = await User.find({})
        res.status(200).json({users})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Error server."})
    }
}

exports.listenSingleUser = async (req,res) => {
    try{
        const user = await Post.findById(req.params.id_post);
        if(user===null)
            nullifiable();
        res.status(200).res.json(user);
    } catch(error){
        console.log(error);
        res.status(500).res.json({message : "Error server."})
    }
}

exports.updateUser = async(req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id_user, req.body, {new: true});
        if(user===null)
            nullifiable();
        res.status(200).json({user})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Error server."})
    }
}

exports.deleteUser = async(req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id_user);
        res.status(204).json({message: "User delete"})
    } catch (error){
        console.log(error);
        res.status(500).json({message : "Error server."})
    }
}