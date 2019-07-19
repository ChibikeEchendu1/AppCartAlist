import React from 'react';
import Swipeout from 'react-native-swipeout'
import {setLocation} from '../actions'
import {connect} from 'react-redux'

import {View,Text,Platform, StyleSheet,TouchableOpacity,Image} from 'react-native'
const IP = 'http://localhost:5000' 
//const IP = 'http://localhost:5000/items/2019-05-26T00:47:50.420Zseasoning-cube.png'



class  LocationHouse extends React.Component{
    constructor(props){
        super(props);
     
        this.state={
            activeRowKey:null,
            activeRowPKey:null
        };
    }


    onButtonPress(){
        const Name = this.props.Name;
        const _id = this.props._id
       this.props.setLocation({Name,_id});
      }

     


    render(){

    

   

    return(
    <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.viewStyle}>
   
      
    
   
        <Text style={{fontSize: 25,marginLeft:20}}>{this.props.Name}</Text>
        </TouchableOpacity>
    );
}
}


const styles = StyleSheet.create({
    
    viewStyle: {
        backgroundColor:'white',
        
        //position:'absolute',
       // top: Platform.OS === 'ios' ? 0 :0, 
        //paddingTop: 20,
        flexDirection: 'row',
        borderBottomWidth:0.3,
        width: '100%',
        alignItems:'center',
        justifyContent:'flex-start',
        height: 44,
        
    },
    tab:{
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    }


   
});


export default connect(null,{setLocation})(LocationHouse);
