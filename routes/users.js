var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('books/index');
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Server Side API Calls' });
});


router.get('/books/index', function(req, res, next) {
  res.render('books/index');
});

router.get('/books', function(req, res) {
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + api_key)
    .end(function (response) {
        var NYTBooks = response.body.results.books;
        console.log(NYTBooks);
        res.render('books/index', {books: NYTBooks});
      })
})



router.get('/books/show', function(req, res, next) {
  res.render('books/show');
});

router.get('/books/edit', function(req, res, next) {
  res.render('books/edit');
});

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

router.get('/books/index', function(req, res, next) {
  res.render('books/index');
});


module.exports = router;
