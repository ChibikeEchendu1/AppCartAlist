import React, {Component} from 'react'
import {View, Text,Image} from 'react-native'
import LoginScreenView from '../components/LoginScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
class LoginScreen extends Component{
    render(){
        const{navigation} = this.props;
        return(
            
            <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>

                <LoginScreenView navigation={navigation}/>
                </Provider>
            
        )
    }
}

export default LoginScreen;