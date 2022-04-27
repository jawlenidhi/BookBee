const mongoose = require('mongoose');


//DECLARING SCHEMA FOR USERS

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true
  },
  username:{
    type: String
  }
})

const bookSchema = new mongoose.Schema({
    bookName : {
      type: String,
      required: true
    },
    bookReview: [reviewSchema]
    // review: {
    //   type: String,
    //   required: true
    // },
    // username:{
    //   type: String,
    //   required: true
    // }
        
   
})
const Book = mongoose.model('BOOK', bookSchema);

module.exports = Book;

