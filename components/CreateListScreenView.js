import React, { Component } from 'react';
import {SafeAreaView,View,TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from './Header';
import {connect} from 'react-redux'
import {emailChanged} from '../actions'

class CreateListScreenView extends Component{

    

    render(){
        return(
            <View>
            <Header/> 
            <View style={{alignItems:'center',justifyContent:'center', marginTop:'50%',height:80}}>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('ItemDisplayScreen')} style={{flexDirection:'row',justifyContent:'center', alignItems:'center',alignContent:'center',width:'100%'}}>
        
            <Icon color='#FA2700' style={{}} name="plus" size={35}/><Text style={{fontSize:24,marginLeft:30}}>Create List</Text>
            
            </TouchableOpacity>  
            </View>

             </View>
        )
    }

}

export default connect(null,{emailChanged})(CreateListScreenView);



