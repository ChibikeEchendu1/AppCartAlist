import React from 'react';
import {View,Text,Platform, StyleSheet,TouchableOpacity,Image} from 'react-native'
const IP = 'http://localhost:5000' 
//const IP = 'http://localhost:5000/items/2019-05-26T00:47:50.420Zseasoning-cube.png'
const ItemHouse = (props) =>{
    return(
    <View style={styles.viewStyle}>
   
      
    
   
        <Text style={{fontSize: 25,marginLeft:20}}>{props.Name}</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        backgroundColor:'white',
        
        //position:'absolute',
        top: Platform.OS === 'ios' ? 0 :0, 
        //paddingTop: 20,
        flexDirection: 'row',
        borderBottomWidth:0.3,
        width: '100%',
        alignItems:'center',
        justifyContent:'flex-start',
       // height: '100%',
        
    },
    tab:{
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    }


   
});

export {ItemHouse};