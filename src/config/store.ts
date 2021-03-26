// * modules

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

// * utils

import rootSaga from "./saga"
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
}

const allReducer = combineReducers({
  userReducer
})

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, allReducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)
export { store, persistor };

