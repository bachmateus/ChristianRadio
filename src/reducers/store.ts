import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import ReduxThunk from 'redux-thunk';

import reducers from ".";

const persistedReducer = persistReducer({
  key:'root',
  storage: AsyncStorage,
  whitelist:['userReducer', 'stationReducer', 'favoritesReducer']
}, reducers);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export { store, persistor };