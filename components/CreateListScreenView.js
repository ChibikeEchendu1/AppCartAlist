import React, { Component } from 'react';
import {SafeAreaView,View,TouchableOpacity,Text,AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from './Header';
import {connect} from 'react-redux'
import {emailChanged,itemclered} from '../actions'

class CreateListScreenView extends Component{

    constructor(){
        super();
        this.state = {
            ready: false,
            where: {lat:null, lng:null},
            error: null,
            location:false,
            user:{Name:''}
        }
    }
    async  componentDidMount(){

       
       

        let token = await AsyncStorage.getItem('loginToken')
        console.log(token);
        console.log(token.replace(/;/g,','));
        this.setState({user:JSON.parse(token)});
        console.log(this.state.user.Name);
        console.log(token);
        
        
    if (this.state.user.Location) {
        console.log(token);
        this.setState({location:true})
    }else{
        console.log(token,"no");
        
    }

    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        
        this.setState({
            ready:true,
            location:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({error: err.message});
    }

    render(){
        return(
            <View>
            <Header Name={this.state.user.Name} List={this.state.user.List} location={this.state.user.Location}/> 
            <View style={{alignItems:'center',justifyContent:'center', marginTop:'50%',height:80}}>
            <TouchableOpacity onPress={() =>  { this.state.location == true ? this.props.navigation.navigate('ListNameScreen'):this.props.navigation.navigate('LocationSelectScreen',{_id:this.state.user._id}) }} style={{flexDirection:'row',justifyContent:'center', alignItems:'center',alignContent:'center',width:'100%'}}>
        
            <Icon color='#FA2700' style={{}} name="plus" size={35}/><Text style={{fontSize:24,marginLeft:30}}>Create List</Text>
            
            </TouchableOpacity>  
            </View>

             </View>
        )
    }

}


const mapStateToProps = state =>{
    return{
        email: state.auth.email,
        
    }
}

export default connect(mapStateToProps,{emailChanged,itemclered})(CreateListScreenView);



