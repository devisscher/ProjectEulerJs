var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:problem', function(req, res, next) {
    const problem = req.params.problem;
    res.render('index/' + problem, { title: 'Express' });
});

module.exports = router;