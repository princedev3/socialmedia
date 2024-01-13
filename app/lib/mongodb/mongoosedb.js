import mongoose from "mongoose";

const connection = {}

export const connectdb =async()=>{
    try {
        if(connection.isConnected){
            console.log("existing connect")
            return
        }

       const db =  await mongoose.connect(process.env.MONGO)
       connection.isConnected = db.connections[0].readyState
    } catch (error) {
        throw new Error("connect failed")
    }
}