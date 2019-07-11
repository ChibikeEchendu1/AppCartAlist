import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CreateListScreenView from '../components/CreateListScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../store'
//import configureStore from './store';

const { persistor, store } = configureStore();
class CreateListScreen extends Component{
    render(){
        const{navigation} = this.props;
        return(
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CreateListScreenView navigation={navigation}/>
                </PersistGate>
            </Provider>
        )
    }
}

export default  CreateListScreen

 