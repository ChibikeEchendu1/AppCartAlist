import React, {Component} from 'react'
import {View, Text,Image} from 'react-native'
import LoginScreenView from '../components/LoginScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import configureStore from '../store'
import { PersistGate } from 'redux-persist/integration/react';

//import configureStore from './store';

const { persistor, store } = configureStore();
class LoginScreen extends Component{
    render(){
        const{navigation} = this.props;
        return(
            
            <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
 
                <LoginScreenView navigation={navigation}/>
                </PersistGate>
                </Provider>
            
        )
    }
}

export default LoginScreen;