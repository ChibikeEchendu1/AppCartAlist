import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const AuthFooter = (props) =>{

    return(
    <View style={styles.viewStyle}>
    <View>
       <Text style={{fontSize:20,color:'#FA2700',alignSelf:'center'}}>{props.use}</Text>
       </View>

       <View style={{flexDirection:'row',marginTop:20, justifyContent:'space-evenly'}}>
       <TouchableOpacity>
       <Icon color='#FA2700' name="facebook-square" size={30} style={{alignSelf: 'center'}}/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Icon color='#FA2700' name="google-plus-square" size={30} style={{alignSelf: 'center'}}/>
       </TouchableOpacity>
       </View>
       </View>
    );

}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
       //borderWidth:5,
        position:'absolute',
       //flex:1,
       marginBottom:20,
        bottom:0,
        width: '100%',
        justifyContent: 'center',
        alignSelf:'flex-end',
        height: '15%',
        backgroundColor: 'white',
    },

   
});

export default AuthFooter;