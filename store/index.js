import {Provider} from 'react-redux';
import{createStore,compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['item']
  };

  const persistedReducer = persistReducer(persistConfig, reducers);




export default () => {
    const store=createStore(persistedReducer, {},compose(applyMiddleware(ReduxThunk)))
    return { store, persistor: persistStore(store) };//.purge() 
  };
//export default store;