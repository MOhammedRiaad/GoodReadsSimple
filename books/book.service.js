const csv = require('csv-parser');
const fs = require('fs');

var books = [];
const readFile =  fs.createReadStream('./bookstore/books.csv')
  .pipe(csv())
  .on('data', (row) => {
    // eslint-disable-next-line no-console
   
    books.push(row)
  })
  .on('end', () => {
    // eslint-disable-next-line no-console
    console.log('CSV file successfully processed');
    return books
  });




module.exports = {
  readFile,
  books
}