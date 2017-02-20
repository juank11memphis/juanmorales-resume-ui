import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      reduxImmutableStateInvariant()
    )
  );
}
