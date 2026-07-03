// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected ✅");
    
//   } catch (err) {
//     console.error("MongoDB connection error:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose")

const conneactDB =async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB conneacted")
  }
  catch(error){
     console.error({message:error})
  }
}
module.exports = conneactDB