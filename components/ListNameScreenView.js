import React, { Component } from 'react';
import {SafeAreaView,View,TouchableOpacity,Text} from 'react-native'
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeHeader} from './HomeHeader';
import {NameChanged} from '../actions'
import {connect} from 'react-redux'

class CreateListScreenView extends Component{

    onNameC(text){
        this.props.NameChanged(text)
    }

    render(){
        return(
            <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
            <HomeHeader title='Name The List '/>

            <Input
  placeholder='List Name'
  leftIcon={
    <Icon
      name='list'
      size={24}
      color='#FA2700'
    />
  }
  value={this.props.name}
  onChangeText = {this.onNameC.bind(this)}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
  inputStyle={{marginLeft:7}}
  errorMessage={this.props.NameError}
  inputContainerStyle={{width: '90%',alignSelf:'center'}}
/>

<TouchableOpacity onPress={() =>props.navigate()} style={{ justifyContent:'flex-start'}}><Icon color='#FA2700' name="chevron-right" size={30} style={{alignSelf: 'flex-end',marginRight:20,marginBottom:70}}/></TouchableOpacity>

            </SafeAreaView>
        )
    }

}

const mapStateToProps = state =>{
    return{
        
        name:state.auth.name,
        NameError:state.auth.NameError,
        Loader:state.auth.Loader
        
    }
}

export default connect(mapStateToProps,{NameChanged})(CreateListScreenView);

