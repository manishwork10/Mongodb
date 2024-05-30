import mongoose from "mongoose";

// set rule schema

const courseSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  price: Number,
  tutorName: String,
});

//create a table
const Course = mongoose.model("course", courseSchema);

export default Course;