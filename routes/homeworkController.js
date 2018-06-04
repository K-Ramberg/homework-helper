const express = require('express');
const router = express.Router();
const Homework = require('../models/Homework')

/* GET homework listing. */
//localhost/homework
router.get('/', function (req, res, next) {
    Homework.find() //brings our everythting
        .then((homeworks) => {
            res.render('homework/index', {
                homeworks
            })
        })
});

router.get('/new', (req, res) => {
    res.render('homework/new')
})

router.post('/', (req, res) => {
    const newHomework = req.body
    Homework.create(newHomework)
        .then(() => {
            res.redirect('/homework')
        })
})

router.get('/:id', (req, res) => {
        Homework.findById(req.params.id)
        .then((bbb) => {
            res.render('homework/show', {
                assignment: bbb
            })
        })
    // Homework.findById(req.params.id)
    //     .then((homework) => {
    //         res.render('homework/show', {
    //             homework: homework
    //         })
    //     })
})

router.get('/:id/edit', (req, res) => {
    // Homework.findById(req.params.id)
    //     .then((banana) => {
    //         res.render('homework/edit', {
    //             homework: banana
    //         })
    //     })
})

router.put('/:id', (req, res) => {
    Homework.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => {
            res.redirect(`/homework/${req.params.id}`)
        })

})

router.delete('/:id', (req, res) => {
    Homework.findByIdAndRemove(req.params.id)
    .then(() =>{
        res.redirect('/homework')
    })
})

module.exports = router