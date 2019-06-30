import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ListNameScreenView from '../components/ListNameScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
class ListNameScreen extends Component{
    render(){
        return(
            <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
                <ListNameScreenView/>
                </Provider>
         
        )
    }
}

export default ListNameScreen;