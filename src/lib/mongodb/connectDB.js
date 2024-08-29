import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("There is no mnongo URI to connect to. Get one from mongo db -> database -> connect");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null};
}

async function connectDB() {
    if(cached.conn){
        // console.log("db already connected");
        return cached.conn;
    }

    if(!cached.promise){
        const options = {
            bufferCommands:false
        };
        cached.promise = await mongoose.connect(MONGODB_URI, options).then(mongoose=>{
            console.log("db connected");
            return mongoose;
        });
    }
    
    try{
        cached.conn = await cached.promise;
    }
    catch(err){
        cached.promise = null;
        throw err;
    }

    return cached.conn;
}

export default connectDB;