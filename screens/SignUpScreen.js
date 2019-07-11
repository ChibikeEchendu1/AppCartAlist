import React, {Component} from 'react'
import {View, Text} from 'react-native'
import SignOutScreenView from '../components/SignOutScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import configureStore from '../store'
//import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore();
class SignUpScreen extends Component{
    render(){
        const{navigation} = this.props;
        return(
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
 
            <SignOutScreenView navigation={navigation}/>
            </PersistGate>
            </Provider>

        )
    }
}

export default SignUpScreen;