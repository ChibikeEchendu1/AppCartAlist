import React from 'react';
import {View, Text, Image,StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = (props) =>{
    //const {  goBack, state } = props.navigation;
    return(
    <SafeAreaView style={styles.viewStyle}>
     <TouchableOpacity style={{alignSelf:'center',marginLeft:30}} onPress={() => { props.navigation() }}> 
       <Icon name="chevron-left" color='#FA2700' size={30} style={{alignSelf: 'center'}}/>
         
          <Text style={{fontSize:15,color:'#282828'}}>Back</Text>
        
        </TouchableOpacity>

<View numberOfLines={1} style={{alignSelf:'center',alignItems:'center',marginLeft:30}}>
        <View style = {{alignSelf:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold', color:"#FA2700", alignSelf:'center'}}>{props.num}</Text>
          <Text style={{fontSize:15, color:"#FA2700"}}>Items</Text>
          </View>
        </View>
       <TouchableOpacity style={{alignSelf:'center',marginRight:30}} onPress={()=>  props.navigation.navigate("Addprofile")}> 
       <Icon name="chevron-right" color='#FA2700' size={30} style={{alignSelf: 'center'}}/>
         
          <Text style={{fontSize:15,color:'#282828'}}>Review</Text>
        
        </TouchableOpacity>
        

    </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
       // position:'absolute',
        top:0,
        
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        borderBottomWidth:0.4
       
        
    },

   
});

export {Footer};