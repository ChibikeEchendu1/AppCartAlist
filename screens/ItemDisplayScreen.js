import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ItemDisplayScreenView from '../components/ItemDisplayScreenView'
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import configureStore from '../store'
//import configureStore from './store';

const { persistor, store } = configureStore();
class ItemDisplayScreen extends Component{
    render(){
        const{navigation} = this.props;
        return(
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
 
                <ItemDisplayScreenView navigation={navigation}/>
                </PersistGate>
                </Provider>
        )
    }
}

export default ItemDisplayScreen;