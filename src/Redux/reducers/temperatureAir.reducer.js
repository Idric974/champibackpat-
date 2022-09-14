import {
  TEMPERATURE_AIR,
} from '../Actions/temperatureAir.action';

const initialState = {};

export default function relaysReducer(state = initialState, action) {
  switch (action.type) {

    case TEMPERATURE_AIR:
      return action.payload;

    default:
      return state;
  }
}
