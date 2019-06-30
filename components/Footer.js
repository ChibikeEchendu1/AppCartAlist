import React from 'react';
import {View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Footer = (props) =>{

    return(
    <View style={styles.viewStyle}>

<View numberOfLines={1} style={{alignSelf:'center',alignItems:'center',marginLeft:30}}>
        <View style = {{alignSelf:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold', color:"#FA2700", alignSelf:'center'}}>3</Text>
          <Text style={{fontSize:15, color:"#FA2700"}}>Items</Text>
          </View>
        </View>
       <TouchableOpacity style={{alignSelf:'center',marginRight:30}} onPress={()=> props.Active == "Done" ? props.navigation.navigate("Addprofile",{Id: props.Id}) : props.navigation.navigate("Code3",{Id: props.Id})}> 
       <Icon name="chevron-right" color='#FA2700' size={30} style={{alignSelf: 'center'}}/>
         
          <Text style={{fontSize:15,color:'#282828'}}>Review</Text>
        
        </TouchableOpacity>
        

    </View>
    );

}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
        position:'absolute',
        bottom:0,
        
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        borderTopWidth:1
        
    },

   
});

export {Footer};