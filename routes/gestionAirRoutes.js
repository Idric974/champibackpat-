const express = require('express');
const router = express.Router();
const gestionAirControllers = require('../controllers/gestionAirControllers');

//! POST

const affichageTemperatureAir = require('../controllers/gestionAirControllers');
router.get('/getTemperatureAir', affichageTemperatureAir.getTemperatureAir);



//! -------------------------------------------------

module.exports = router;