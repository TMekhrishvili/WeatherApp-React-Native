import { createStore, combineReducers } from 'redux';
import temperature from './reducers/tempReducer';
import history from './reducers/historyReducer';

const reducer = combineReducers({
  temperature,
  history
})

export const store = createStore(reducer);