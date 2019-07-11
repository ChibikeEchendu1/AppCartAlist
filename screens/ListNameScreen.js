import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ListNameScreenView from '../components/ListNameScreenView'
import {Provider} from 'react-redux';
import configureStore from '../store'
//import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore();

class ListNameScreen extends Component{
    render(){
        return(
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
 
                <ListNameScreenView/>
                </PersistGate>
                </Provider>
         
        )
    }
}

export default ListNameScreen;