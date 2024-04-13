import  mongoose, { Mongoose }  from "mongoose";

//FORMA DE ESQUEMA CON MONGOO

//ESQUEMA USUARIO
const UserSchema= new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,  //tiene que ser requerido
            //con valores minimos y max para introducir
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            required:true,  //tiene que ser requerido
            //con valores minimos y max para introducir
            min:2,
            max:50,
        },
        email:{
            type:String,
            required:true,  //tiene que ser requerido
            //con valores minimos y max para introducir
            max:50,
            unique:true, //unico ya que no pueden existir correos duplicados 
        },
        password:{
            type:String,
            required:true,  //tiene que ser requerido
            //con valores minimos y max para introducir
            min:5,
        },
        picturePath:{
            type:String,
            default:"",
        },
        friends:{
            type:array,
            default:[],
        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number,
    },{timestamps:true});  //el timestaps nos dara fecha de tiempo cuando se actualiza,crea etc

    //FORMA DE EXPORTAR EL MODELO
    const User = Mongoose.model("User",UserSchema);
    export default User;