import {
  AsyncStorage,
  Platform,
} from 'react-native';
import devTools from 'remote-redux-devtools';
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './src/modules/reducers';
import mainSaga from './src/modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const enhancer = compose(
  applyMiddleware(...middlewares),
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678
  })
);

const persistConfig = {
  key: 'root',
  timeout: null,
  storage: AsyncStorage,
  whitelist: [
    'kittens',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const initialStore = createStore(persistedReducer, undefined, enhancer);
sagaMiddleware.run(mainSaga);

export const store = initialStore;
export const persistor = persistStore(initialStore);
