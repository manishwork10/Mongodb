//create db
use('Traning');
// ! Remember to run code only one time otherwise it would send the object twice in the database present in mumbai.
//! insertOne and insertMany
// db.student.insertOne({
//     name: "manish",
//     address: "narephat",
//     gender: "male",
// });
// db.student.insertOne({
//     name: "kajol",
//     address: "janakpur",
//     gender: "female",
// })
// db.student.insertMany([{ name: "yesika", address: "lalitpur", gender:"female",},
// {
//     name: "Ram",
//     address: "aayodha",
//     gender: "male",
// }
// ])
//db.student.find();
// db.student.findOne({
//     name: "manish"
// });
//! findOne and find
// db.student.findOne();
// it will find the first student document.
// db.student.find({gender: "female"});

//! deleteOne and deleteMany
// db.student.deleteOne({name: "manish"});
// db.student.find();
// db.student.updateOne(
//     {name: "manish"},
//     {
//         $set:{
//             address: "Terathum"
//         }
//     }
// );
db.student.find();
