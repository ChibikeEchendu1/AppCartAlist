import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader = (props) =>{
    return(
    <View style={styles.viewStyle}>
<TouchableOpacity onPress={() =>props.navigate()} style={{ justifyContent:'flex-start'}}><Icon color='#FA2700' name="chevron-left" size={30} style={{alignSelf: 'center',marginLeft:20}}/></TouchableOpacity>
<View><Text style={{fontSize:30,alignSelf:'center', marginLeft:20}}>{props.title}</Text></View></View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.7,
        top:5,
        alignSelf: 'center',
        alignItems:'flex-start',
       justifyContent:'space-between',
        flexDirection: 'column',
        marginBottom:35,
        width: '100%',
        height: '13%',
       // backgroundColor: 'white',
    
    
    },

   
});

export {HomeHeader};