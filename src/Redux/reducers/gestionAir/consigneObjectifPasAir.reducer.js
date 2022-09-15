import {
  GET_CONSIGNE_OBJECTIF_PAS,
} from '../../Actions/gestionAir/consigneObjectifPasAir.action';

const initialState = {};

export default function relaysReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CONSIGNE_OBJECTIF_PAS:
      return action.payload;

    default:
      return state;
  }
}
