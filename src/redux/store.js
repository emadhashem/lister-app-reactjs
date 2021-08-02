import { createStore } from 'redux'
import rootreducer from './reducers/rootreducer'
import {persistStore} from 'redux-persist'
import middlewares from './middlewares'
export const store = createStore(rootreducer, middlewares)
export const persistor = persistStore(store)