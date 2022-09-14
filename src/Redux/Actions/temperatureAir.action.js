import recuperationEtatVanneFroid from '../../../sql/gestionAir';
export const TEMPERATURE_AIR = 'TEMPERATURE_AIR';

//! Logique pour la récupération de la température air.

export const getTemperatureAir = () => {

  return async (dispatch) => {
    try {

      let temperatureAir = recuperationEtatVanneFroid
      console.log("temperatureAir :", temperatureAir);

      // dispatch({ type: TEMPERATURE_AIR, payload: data });

      console.log(
        '✅ %c SUCCÈS ==> temperatureAir.action ==> Get Temperature Air',
        'color: green',

      );

    } catch (err) {
      return console.log('❌ %c ERREUR ==> temperatureAir.action ==> Get Temperature Air',
        'color: orange', err);
    }
  };
};

//! -------------------------------------------------



