import { combineReducers } from 'redux';
import clicOnMenu from './clicOnMenu.reducer';
import relays from './relays.reducer';
import temperatureAir from './temperatureAir.reducer';

export default combineReducers({
  clicOnMenu,
  relays,
  temperatureAir
});
