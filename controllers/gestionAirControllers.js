const Sequelize = require('sequelize');
const db = require('../models');
const gestionAirsDataModels = db.gestionAirData;
const gestionAirModels = db.gestionAir;

//* ➖ ➖ ➖ ➖ ➖ ➖ Gestion Air ➖ ➖ ➖ ➖ ➖ ➖ //

exports.getTemperatureAir = (req, res) => {
    console.log('test requete');

    res.status(200).json({ message: "Requete OK" });

};


