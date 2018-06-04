const mongoose = require('mongoose')
const Homework = require('../models/Homework')

//connecto to database
mongoose.connect('mongodb://localhost/homework-helper')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('error: ', err)
  })

//remove old homework data
Homework.remove()
  .then(() => {
    const homework1 = new Homework({
      title: 'pirates read create',
      description: "pirates",
      subject: 'express',
      createdBy: 'bob',
    })
    const homework2 = new Homework({
      title: 'update delete pirates',
      description: " more pirates",
      subject: 'express',
      createdBy: 'joof',
    })
    const homework3 = new Homework({
      title: 'pizza express',
      description: "pizza rates",
      subject: 'expr',
      createdBy: 'sal',
    })
    const homework4 = new Homework({
      title: 'final project',
      description: "pirate project",
      subject: 'rails',
      createdBy: 'bryan',
    })

    const homeworks = [homework1, homework2, homework3, homework4]
    return Homework.insertMany(homeworks)
  })
    .then(() => {
      mongoose.connection.close()
    })
