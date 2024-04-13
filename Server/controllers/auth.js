//FUNCIONALIDADES DE AUTENTIFICACION
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken" //forma de enviar un token al usuario
import User from "../models/User.js"

//REGISTRO DE USUARIO (END-POINT)
export const register = async(req,res)=>{
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        }=req.body
        const salt= await bcrypt.genSalt();
        const passwordHash= await bcrypt.hash(password,salt);  //esperar a que se encripte la contraseña

        const newUser= new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random()*10000),  //!(VISTADEPERFIL)este campo es ficticio se podria desarrollar la funcionalidad luego
            impressions: Math.floor(Math.random()*10000)  //!(VISTADEPERFIL)este campo es ficticio se podria desarrollar la funcionalidad luego
        });
        const savedUser= await newUser.save();
        res.status(201).json(savedUser) //si el status es OK(201) se envia respuesta que se guardo el usuario
    }catch(err){
        //sino se catchea el error y se devuelve el status error(500) junto con el mensaje
        res.status(500).json({error: err.message });
    }
};