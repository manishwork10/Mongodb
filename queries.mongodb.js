use('Traning');
//? count gives all documents that matches the query.
// db.movies.find().count();
//! Read operation

//?  comparision operator
//? $eq, $lt, $lte, $gt, $gte, $ne

//? name === "Chicago Fire"
// db.movies.find({name: { $eq: "Chicago Fire"}});
// ? shortcut
// db.movies.find({name: 'Chicago Fire'})

//? $lt, $lte
// weight <90
// db.movies.find({ weight: { $lt: 90}})
 
//? $ne => not equal to 
//? runtime !== 60
// db.movies.find({ runtime: { $not: { $eq: 60 }}});

// db.movies.find({ runtime: { $ne: 30}})

//? question 
//? find movies whose statur is " Ended"

// db.movies.find({status: "Ended"})

//? find the movies whose rating is 9
// db.movies.find({"rating.average": { $eq: 9}})
//? find movies whose genres is Thriller
// db.movies.find({genres:"Thriller"})


//? find movies whose weight is not 87
// db.movies.find({weight: { $ne: 87 }})

//! logicak opeartor 
//? $and, $or, $not, $nor

//? find movies whose rating is greater than 7 and less than 8.
// db.movies.find({$and: [
//     {
//         'rating.average': { $gt: 7},
//     },
//     {
//         'rating.average': { $lt: 8}
//     }
// ]},{
//     _id: 0,
//     name: 1,
//     rating: 1,
// })

//? $or
//? find movies whose status is Running or 
//? Rating is greater than 9

// db.movies.find(
//     {
//         $or: [
//             {
//                 status: 'Running'
//             },
//             {'rating.average': { $gt: 9}}
//         ]
//     },
//     {
//         _id: 0,
//         name: 1,
//         rating: 1,
//         status: 1
//     }
// )

//? nor => gives the opposite value to or.
//? find movies whose status is not Ended and whose rating is not less than 9

//? Array
//? $size: show the size of array.
//? $all
// find movies whose gnera is "Thriller" and "Drama"