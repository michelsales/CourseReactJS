import { combineReducers, createStore } from "redux";
import numbersReducers from './reducers/numbersReducers'

const reducers = combineReducers({
    numeros: numbersReducers,
})

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
