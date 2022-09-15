import {
  TEMPERATURE_AIR,
  POST_CONSIGNE_AIR,
  POST_OBJECTIF_PAS_AIR
} from '../../Actions/gestionAir/temperatureAir.action';

const initialState = {};

export default function relaysReducer(state = initialState, action) {
  switch (action.type) {

    case TEMPERATURE_AIR:
      return action.payload;

    case POST_CONSIGNE_AIR:
      return action.payload;

    case POST_OBJECTIF_PAS_AIR:
      return action.payload;

    default:
      return state;
  }
}
