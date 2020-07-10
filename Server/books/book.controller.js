const bookService = require('./book.service')
const express = require('express');

const router = express.Router();
//const validateRequest = require('_middleware/validate-request');


router.get('/books',readbooks)

module.exports = router;

 function getBooks(){

    const books =  bookService.books;
    return books
}


function readbooks (req, res){
    const book = getBooks();
    res.json(book)
  }
