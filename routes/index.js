var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });
});
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var answer = 1;
    var vm = {
        number: 1,
        title: "Multiples of 3 and 5",
        question: "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.",
        answer: answer
    }
    res.render('problem', vm);
});
module.exports = router;