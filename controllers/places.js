const router = require('express').Router()
const places = require('../models/places.js')

//new
router.get("/new", (req, res) => {
  res.render("places/new");
})

//post
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city){
    req.body.city = "Anytown"
  }
  if (!req.body.state) {
    req.body.state = "USA"
  }
  places.push(req.body)
  res.redirect('/places')
})

//index
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

module.exports = router
