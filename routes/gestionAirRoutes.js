const router = require('express').Router();
const gestionAirControllers = require('../controllers/gestionAirControllers');

//! POST

router.get('/getTemperatureAir', gestionAirControllers.getTemperatureAir);

//! -------------------------------------------------

module.exports = router;