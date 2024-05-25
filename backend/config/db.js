import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://vikaspad:9081@cluster0.vvfo4xx.mongodb.net/food-del-app').then(()=>console.log("DB Connected"))
}