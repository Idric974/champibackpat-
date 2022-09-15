import axios from 'axios';
export const GET_CONSIGNE_OBJECTIF_PAS = 'GET_CONSIGNE_OBJECTIF_PAS';

//! -------------------------------------------------

//! Récupérer la Consigne, l'Objectif et le Pas Air'.

//* Température Air.

let getConsigne;
let getObjectif;
let getPas;
let data;


export const getOjectifPasAir = () => {

  return async (dispatch) => {
    try {

      axios({
        url: 'http://localhost:4000/api/gestionAir/getObjectifPasAir',
        method: 'get',
      })
        .then((response) => {

          // console.log('response', response);

          data = {
            getConsigne: response.data[0].consigneAir,
            getObjectif: response.data[0].objectifAir,
            getPas: response.data[0].consigneAir,
          }

          console.log(
            '✅ %c SUCCÈS ==> temperatureAir.action ==> Get Consigne Objectif Pas',
            'color: green',
            data
          );

        })
        .then(() => {
          dispatch({ type: GET_CONSIGNE_OBJECTIF_PAS, payload: data });
        })
        .catch((error) => {
          console.log(error);

        });

    } catch (err) {

      return console.log('❌ %c ERREUR ==> temperatureAir.action ==> Get Consigne Objectif Pas',
        'color: orange', err);
    }

  };
};

//! -------------------------------------------------

