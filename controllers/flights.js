const Flights = require('../models/schema')


const newFlight =(req, res)=>{
    res.render('new')
}

const createFlight =(req, res)=>{
    Flights.create(req.body).then(()=>{
        res.redirect('/')
        console.log(req.body)
    })
}

const findFlight =(req, res)=>{
    Flights.find({}).then((data)=>{
        res.render('index', {
            data: data
        })
       
    })
}

const showFlight =(req, res)=>{
    Flights.findById(req.params.id).then((data)=>{
        res.render('show', {
            data: data
        })
       
    })
}



const editPage =(req, res)=>{
    Flights.findById(req.params.id).then((data)=>{
        res.render('update', {
            data: data
        })
       
    })
}

const deleteFlight =(req, res)=>{
    Flights.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('/')
       
    })
}

const updateFlight =(req, res)=>{
    Flights.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((data)=>{
    res.redirect('/')
    })
}

module.exports ={
    newFlight,
    create: createFlight,
    findFlight,
    showFlight,
    deleteFlight,
    updateFlight,
    editPage,
} 