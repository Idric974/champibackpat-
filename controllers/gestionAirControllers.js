const Sequelize = require('sequelize');
const db = require('../models');
const gestionAirsDataModels = db.gestionAirData;
const gestionAirModels = db.gestionAir;

//* ➖ ➖ ➖ ➖ ➖ ➖ Gestion Air ➖ ➖ ➖ ➖ ➖ ➖ //

exports.getTemperatureAir = (req, res) => {
    gestionAirModels
        .findOne({
            attributes: [[Sequelize.fn('max', Sequelize.col('id')), 'maxid']],
            raw: true,
        })
        .then((id) => {
            // console.log('Le dernier id de gestionAir est : ', id);
            // console.log(id.maxid);

            gestionAirModels
                .findOne({
                    where: { id: id.maxid },
                })
                .then((temperatureAir) => {
                    res.status(200).json({ temperatureAir });
                });
        });
};


