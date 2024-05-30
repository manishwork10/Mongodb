import express from 'express';
import connectDB from './db.connect.js';
import Course from './course.model.js';

const app = express();

// to make app understand json
app.use(express.json());

// connect db
connectDB();

// ? create routes here
app.post('/course/add', async (req, res) => {
  // extract new course from req.body
  const newCourse = req.body;

  await Course.create(newCourse);

  return res.status(201).send({ message: 'Course is added successfully.' });
});

// ? get courses
app.get('/course/list', async (req, res) => {
  const courses = await Course.find();

  return res.status(200).send({ message: 'success', courseList: courses });
});

//? delete
app.delete("/course/delete/:id", (req, res)=> {
// extract course id from req.params
const courseId = req.params.courseId;
  return res.status(200).send("Deleting...");
});
// check if coure id is valid mongo id or not
const isValidMongoId = mongoose.isValidObjectId(courseId);

// if not valid mongo id, throw error
 if(!isValidMongoId){
  return res.status(400).send({message: "invalid mongo id"
  });
 }
// find course using course id 
const requiredCourse = await Course.findOne({
  _id: courseId
})
// if not course, throw error
if(!requiredCourse){
  return res.status(404).send({
    message: "Course doesn't exist"
  })
}
await Course.deleteOne({ _id: courseId})



// send res
return res.status(200).send({ message: "Course is deleted successfully."})
// network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});