import React from 'react';
import Swipeout from 'react-native-swipeout'
import {delItem} from '../actions'
import {connect} from 'react-redux'

import {View,Text,Platform, StyleSheet,TouchableOpacity,Image} from 'react-native'
const IP = 'http://localhost:5000' 
//const IP = 'http://localhost:5000/items/2019-05-26T00:47:50.420Zseasoning-cube.png'



class  ItemHouse extends React.Component{
    constructor(props){
        super(props);
     
        this.state={
            activeRowKey:null,
            activeRowPKey:null
        };
    }


    render(){

        const swipeSettings = {
            autoClose: true,

            onClose: (secId, rowId,direction)=>{
                if(this.state.activeRowKey!= null){
                    
                this.setState({activeRowPKey:null});
                this.setState({activeRowKey:null});
                }
            },

            onOpen: (secId, rowId,direction)=>{
                this.setState({activeRowKey: this.props.num});
                this.setState({activeRowPKey: this.props.num});

            },
            right:[  
                {
                    onPress:()=>{
                        const {num} = this.props
                        this.props.delItem({num});

                    },
                    text:'Delete',type:'delete'
                }
            ],
            rowId: this.props.item.Id,
            SectionId:1

        };

   

    return(
        <Swipeout {...swipeSettings}>
    <View style={styles.viewStyle}>
   
      
    
   
        <Text style={{fontSize: 25,marginLeft:20}}>{this.props.Name}</Text>
        </View>
        </Swipeout>
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


export default connect(null,{delItem})(ItemHouse);
