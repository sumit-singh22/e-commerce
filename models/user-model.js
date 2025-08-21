const mongoose=require('mongoose');

const userSechema=mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    cart:{
        typr:Array,
        default:[],
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[],
    },
    contact:Number,
    picture:String,
});
module.exports=mongoose.model("user",userSchema);
