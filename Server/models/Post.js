import  mongoose, { Mongoose }  from "mongoose";

//FORMA DE ESQUEMA CON MONGOO

//ESQUEMA USUARIO
const postSchema= new mongoose.Schema(
    {

        userId:{
            type:String,
            required:true,
        },

        firstName:{
            type:String,
            required:true,  //tiene que ser requerido
        },
        lastName:{
            type:String,
            required:true,  //tiene que ser requerido
        },
        likes:{
            type:Map,
            of:Boolean,
        },
        comments:{
            type:Array,
            default:[]
        },
        userPicturePath:String,
        picturePath:String,
        location:String,
        description:String,
    },{timestamps:true});  //el timestaps nos dara fecha de tiempo cuando se actualiza,crea etc


    //FORMA DE EXPORTAR EL MODELO
    const Post = mongoose.model("Post",postSchema);
    export default Post;