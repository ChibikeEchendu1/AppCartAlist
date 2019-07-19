import React, { Component } from 'react';
import {SafeAreaView,View,TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeHeader} from './HomeHeader';
import _ from 'lodash';
import {connect} from 'react-redux'
import {emailChanged,return_Item} from '../actions'

class ReviewScreenView extends Component{

    constructor(props){
        super(props);
      this.state = {
        items:this.props.navigation.state.params.item,
        name:this.props.navigation.state.params.name,
    }
      }

      componentDidMount(){
          this.props.return_Item()
          console.log(this.state.name);
          console.log(this.state.items);
      }
   

    render(){

        const { goBack } = this.props.navigation;
        return(
            <SafeAreaView>
            <HomeHeader title={this.state.name} navigation={goBack} />

             </SafeAreaView>
        )
    }

}

const mapStateToProps = state =>{
    const items = _.map(state.item.items,(Val,uid) =>{
        return {...Val};
      });
    return{
        items,
       }
}

export default connect(mapStateToProps,{emailChanged,return_Item})(ReviewScreenView);



