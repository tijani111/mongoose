const mongoose=require("mongoose");
const person=require("./model");
const connectDB =()=>{
    mongoose.connect("mongodb://localhost/foods",()=>{
        try {
            console.log("database is connected")
        } catch {
            console.log("Error")
        }
    })
}

connectDB();

const perso = new person (
    {
        name: "Simon",
        age: "21",
        favoriteFoods : ["chicken, cola, salad"]
    }
);

perso.save(()=>{
try {
   console.log(" person added ") 
} catch {
    console.log("err")
}
})
person.create([
    {
        name:"Karim",
        age: 30,
        favoriteFoods:["chakchouka", "kosksi"]
    },
    {
        name:"Paulo",
        age:21,
        favoriteFoods:["Burger", "spaghetti","pizza"]

    },
    {
        name:"Hbib",
        age:19,
        favoriteFoods:["Chapati", "Ma9loub"]
    },
    {
        name:"Peter",
        age:15,
        favoriteFoods:["pancake", "frittes", "chicken"]

    },
    {  name:"Mahmoud",
       age:47,
       favoriteFoods:["Mloukhia", "Mosli"]}
   

], (err, res)=>{
try {
    console.log("person added")
} catch  {
    console.log("err") 
}
});
person.find({name:"hbib"}, (err, res)=>{
try {
   console.log(res) 
} catch (err) {
   console.log("err") 
}
});
person.findOne({favoriteFoods:{$in:["salad","chicken"]}},(err, res)=>{
    try {
        console.log(res)
    } catch (err) {
        console.log("err")
        
    }
}
)
person.findById("61cf29f3490a1a697d2127b0",(err,res)=>
{
    try {
        console.log(res)
    } catch (err) {
       console.log("err") 
    }
})

 person.updateOne({name:"Karim"},{age:20}, (err,res)=>{
try {
    console.log(res)
} catch (err) {
    console.log("err")
}
 })
 person.findOneAndDelete({name:"Peter"},(err,res)=>{
     try {
         console.log(res)
     } catch (err) {
         consloe.log("err")
     }
 })
 person.deleteOne({name:"Paulo"}, (err,res)=>{
    try {
        console.log(res)
    } catch (err) {
        console.log("err")
    }
})