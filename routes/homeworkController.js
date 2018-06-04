const express = require('express');
const router = express.Router();
const Homework = require('../models/Homework')

/* GET users listing. */
//localhost/homework
router.get('/', function (req, res, next) {
    Homework.find() //brings our everythting
    .then((homeworks) => {
        res.render('homework/index', {
            homeworks
        })
    })
});

module.exports = router