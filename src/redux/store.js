import { createStore, combineReducers  } from 'redux';
import temperature from './reducer';

const reducer = combineReducers({
    temperature
  })

export const store = createStore(reducer);