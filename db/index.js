import mongoose from 'mongoose'



const connectDB= async()=>{
 
    const MONGODB_URI= `mongodb+srv://chinmay:chinmay123@cluster0.stdem3g.mongodb.net/`
    try {
        await mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
        console.log("Database connected successfully")
    } catch (error) {
        console.log("error while connecting with database", exxor.message)
        
    }
}

export default connectDB

