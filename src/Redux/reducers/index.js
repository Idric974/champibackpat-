import { combineReducers } from 'redux';
import clicOnMenu from './clicOnMenu.reducer';
import relays from './relays.reducer';
import temperatureAir from './gestionAir/temperatureAir.reducer';
import consigneObjectifPasAir from './gestionAir/consigneObjectifPasAir.reducer';

export default combineReducers({
  clicOnMenu,
  relays,
  temperatureAir,
  consigneObjectifPasAir
});
