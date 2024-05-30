import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
"mongodb+srv://manishwork110:o6kfmVzvQBVdMY0R@cluster0.uvrta6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connect successfully ");
  } catch (error) {
    console.log("db connection failed");
    console.log(error.message);
  }
};

export default connectDB;