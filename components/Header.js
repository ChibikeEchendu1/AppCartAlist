import React from 'react';
import {View,Text, StyleSheet,Platform, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) =>{
    return(
        <View style={{backgroundColor: '#FA2700',opacity: 0.8}}>
    <View style={styles.viewStyle}>
    
  <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto',marginLeft:10}} > 
          <Icon name="cogs" size={20}   color={"white"} />
        </TouchableOpacity> 

    <View numberOfLines={1} style={{alignSelf:'center',alignItems:'center',marginTop:'8%', marginLeft:'10%' , marginRight:'10%',top: 0,}}>
        <View>
        <Text style={{fontSize:25,fontWeight:'bold', color:"white", alignSelf:'center'}}>3</Text>
          <Text style={{fontSize:15, color:"white"}}>Lists</Text>
          </View>
        </View>
       
        
    </View>
    <View style={{marginLeft:10,marginBottom:10}}>
        <Text style={{color:"white",fontSize:20}}>gyuybhjkbjyfh bjhbhj</Text>
        <Text style={{color:"white"}}>Enugu</Text>
    </View>
    </View>

    
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        
        top: Platform.OS === 'ios' ? 0 :0, 
        alignSelf: 'center',
        alignItems:'center',
       justifyContent:'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 120,
        
    },

   
});

export {Header};