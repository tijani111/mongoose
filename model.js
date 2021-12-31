const mongoose=require("mongoose");
const schema=mongoose.Schema;
const personS=new schema({
name:{
    type:String,
    unique:true,
    required:true
  
},
age:{
    type:Number,
    required:true
},
favoriteFoods:{
    type:[{
        type: String
    }]
}
}) 
//export the model
module.exports=person=mongoose.model("person",personS)