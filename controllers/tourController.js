const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours
    }
  })
}

exports.getTour =  (req, res) => {
  const id = Number(req.params.id)
  const foundTour = tours.find((el) => el.id === id)
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid request'
    })
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: foundTour
    }
  })
}

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1
  const newTour = Object.assign({ id: newId }, req.body)  
  tours.push(newTour)  
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid request'
    })
  }
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: 'success',
      body: {
        tour: newTour
      }
    })
  })
}

exports.updateTour = (req, res) => {  
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid request'
    })
  }
  res.status(201).json({
    status: 'success',
    message: '<Updated tour here... />'
  })
}

exports.deleteTour = (req, res) => {  
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid request'
    })
  }
  res.status(204).json({
    status: 'success',
    data: null
  })
}