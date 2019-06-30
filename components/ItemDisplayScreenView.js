import React, { Component } from 'react';
import {SafeAreaView,View,TouchableOpacity,Text,ListView,Platform,ActivityIndicator} from 'react-native'
import { Input,Button } from 'react-native-elements';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import{ItemHouse}  from './ItemHouse'
import {Footer} from './Footer'
import {emailChanged,PasswordChanged,NameChanged,FetchItems} from '../actions'
import {connect} from 'react-redux'

class ItemDisplayScreenView extends Component{


    constructor(props){
        super(props);
      this.state = {
        log:'',
        }
        this.renderRow=this.renderRow.bind(this);
      }

      componentWillMount(){
        this.props.FetchItems()
       }

      renderButton(){
        if(this.props.Loader){
          return <ActivityIndicator style={{marginTop:10,alignSelf:'center'}} color="#F44336" size={'large'}/>;
        }
        else{
         const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.getItems())
         return <ListView style={{height:'80%'}}
        dataSource={this.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow}/>;
      }
      }

      renderRow(item){
        return <ItemHouse ImagePath={item.ImagePath} Name={item.Name} />
       }
       onEmailC(text){
        this.props.emailChanged(text)
     }
     
       onPasswordC(text){
        this.props.PasswordChanged(text)
    }
    onNameC(text){
        this.props.NameChanged(text)
    }

    getItems(){
        console.log(this.props.items,'items');
        
       // return  this.props.items;

        return this.props.items.filter(items => {
                        return items.Name.toLowerCase().indexOf( this.props.name.toLowerCase()) !== -1
                    })
      } 

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
            <Input
                placeholder='...Search'
                leftIcon={
                    <Icon
                    name='search'
                    size={24}
                    color='#FA2700'
                    />
                }
  containerStyle={{width:'90%',marginBottom:10}}
  value={this.props.name}
  onChangeText = {this.onNameC.bind(this)}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
  inputStyle={{marginLeft:5}}
  errorMessage={this.props.NameError}
  inputContainerStyle={{width: '100%'}}
/>

</View>

<View style={{justifyContent: 'flex-start', borderBottomWidth:1,marginTop:20,  height:Platform.OS === 'ios' ? '40%' :'40%', width:'100%'}}>
        {
          this.renderButton()
        }
        </View>

        <Text style={{width:'90%',marginTop:30,fontSize:20,marginLeft:'5%'}}>Add Item</Text>

        <Input
  placeholder='Item Name'
  
  containerStyle={{marginTop:10}}
  value={this.props.name}
  onChangeText = {this.onNameC.bind(this)}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
  inputStyle={{marginLeft:7}}
  errorMessage={this.props.NameError}
  inputContainerStyle={{width: '90%',alignSelf:'center'}}
/>


<Input
  placeholder='Size'
 
  onChangeText = {this.onEmailC.bind(this)}
  value={this.props.email}

  inputStyle={{marginLeft:7}}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
 errorMessage={this.props.EmailError}
  inputContainerStyle={{width: '90%',alignSelf:'center',marginTop:30}}
/>

<Input

 value={this.props.password}
  inputStyle={{marginLeft:7}}
  onChangeText = {this.onPasswordC.bind(this)}
  placeholder='Quantity'
  errorStyle={{ color: 'red',marginLeft:'5%' }}
 errorMessage={this.props.PasswordError}
  inputContainerStyle={{width: '90%',alignSelf:'center',marginTop:30}}
/>

        <TouchableOpacity style={{alignSelf:'flex-end',marginRight:30,marginTop:10}} onPress={()=> props.Active == "Done" ? props.navigation.navigate("Addprofile",{Id: props.Id}) : props.navigation.navigate("Code3",{Id: props.Id})}> 
       <Icon name="plus" color='#FA2700' size={30} style={{alignSelf: 'flex-end'}}/>
         
          <Text style={{fontSize:15,color:'#282828'}}>Add</Text>
        
        </TouchableOpacity>

        <Footer/>

            </SafeAreaView>
        )
    }

}

const mapStateToProps = state =>{
    const items = _.map(state.auth.items,(Val,uid) =>{
        return {...Val};
      });
    return{
      email: state.auth.email,
        password:state.auth.password,
        name:state.auth.name,
        NameError:state.auth.NameError,
        EmailError:state.auth.EmailError,
        PasswordError:state.auth.PasswordError,
        Loader:state.auth.Loader,
        items,
       
     }
}

export default connect(mapStateToProps,{emailChanged,PasswordChanged,NameChanged,FetchItems})(ItemDisplayScreenView);

