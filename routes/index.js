var express = require('express');
var router = express.Router();
const flights = require('../controllers/flights');


router.get('/new',  flights.newFlight);
router.post('/', flights.create);
router.get('/', flights.findFlight);
router.get('/:id', flights.showFlight);
router.delete('/:id', flights.deleteFlight);
router.get('/:id/edit', flights.editPage)
router.put('/:id/edit', flights.updateFlight);

module.exports = router;
