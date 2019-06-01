import React, {Component} from 'react'
import {View, Text} from 'react-native'
import SignOutScreenView from '../components/SignOutScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
class SignUpScreen extends Component{
    render(){
        const{navigation} = this.props;
        return(
            <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
            <SignOutScreenView navigation={navigation}/>
            </Provider>

        )
    }
}

export default SignUpScreen;