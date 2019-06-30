import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ItemDisplayScreenView from '../components/ItemDisplayScreenView'
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
class ItemDisplayScreen extends Component{
    render(){
        return(
            <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
                <ItemDisplayScreenView/>
                </Provider>
        )
    }
}

export default ItemDisplayScreen;