import axios from 'axios';
export const TEMPERATURE_AIR = 'TEMPERATURE_AIR';
export const POST_CONSIGNE_AIR = 'POST_CONSIGNE_AIR';
export const POST_OBJECTIF_PAS_AIR = 'POST_OBJECTIF_PAS_AIR';

//! Récupérer la température air.

//* Température Air.

let temperatureAir;
let deltaAir;
let consigne;
let data

export const getTemperatureAir = () => {

  return async (dispatch) => {
    try {

      axios({
        url: 'http://localhost:4000/api/gestionAir/getTemperatureAir',
        method: 'get',
      })
        .then((response) => {

          //console.log('response', response);

          data = {
            temperatureAir: response.data[0].temperatureAir,
            deltaAir: response.data[0].deltaAir,
            consigne: response.data[0].consigne,
          }

          // console.log(
          //   '✅ %c SUCCÈS ==> temperatureAir.action ==> Clic sur un bouton activation eau au sol',
          //   'color: green',
          //   data
          // );

        })
        .then(() => {
          dispatch({ type: POST_CONSIGNE_AIR, payload: data });
        })
        .catch((error) => {
          console.log(error);

        });

    } catch (err) {

      return console.log('❌ %c ERREUR ==> temperatureAir.action ==> getTemperatureAir',
        'color: orange', err);
    }

  };
};

//! -------------------------------------------------


//! Post de la consigne air.

export const postConsigneAir = (data) => {
  // console.log('⭐ consigneAir ⭐ : ', data);

  return async (dispatch) => {
    try {

      const res = await axios({
        method: 'post',
        url: `http://localhost:4000/api/gestionAir/postConsigneAir`,
        data,
      });

      dispatch({ type: POST_CONSIGNE_AIR, payload: data });

      // console.log(
      //   '✅ %c SUCCÈS ==> temperatureAir.action ==> Post de la consigne',
      //   'color: green',
      //   res.data
      // );

    } catch (err) {

      return console.log('❌ %c ERREUR ==> temperatureAir.action ==> Post de la consigne',
        'color: orange', err);
    }

  };
};

//! -------------------------------------------------

//! Post de l'Objectif et du Pas Air.

export const postObjectifPasAir = (data) => {
  console.log('⭐ consigneAir ⭐ : ', data);

  return async (dispatch) => {
    try {

      const res = await axios({
        method: 'post',
        url: `http://localhost:4000/api/gestionAir/postObjectifPasAir`,
        data,
      });

      dispatch({ type: POST_OBJECTIF_PAS_AIR, payload: data });

      // console.log(
      //   "✅ %c SUCCÈS ==> temperatureAir.action ==> Post de l'Objectif et du Pas Air",
      //   'color: green',
      //   res.data
      // );

    } catch (err) {

      return console.log("❌ %c ERREUR ==> temperatureAir.action ==> Post de l'Objectif et du Pas Air",
        'color: orange', err);
    }

  };
};

//! -------------------------------------------------

