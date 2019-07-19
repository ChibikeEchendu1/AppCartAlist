import React, { Component } from 'react';
import {SafeAreaView,View,TouchableOpacity,Text,ListView,Platform,ActivityIndicator} from 'react-native'
import { Input,Button } from 'react-native-elements';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemHouse  from './ItemHouse'
import {Footer} from './Footer'
import {QuanChanged,SizeChanged,ItemChanged,NameChanged,FetchItems,addItem,clear} from '../actions'
import {connect} from 'react-redux'

class ItemDisplayScreenView extends Component{


    constructor(props){
        super(props);
      this.state = {
        log:'',
        name:this.props.navigation.state.params.name,
        }
        this.renderRow=this.renderRow.bind(this);
      }

      componentWillMount(){
       // this.props.FetchItems()
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
         return <ListView style={{height:'100%'}}
        dataSource={this.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow}/>;
      }
      }

      renderRow(item,sectionID, rowID){
        return <ItemHouse ImagePath={item.ImagePath} num ={rowID} item={item} Name={item.itemName} />
       }
       onSizeC(text){
        this.props.SizeChanged(text)
     }
     
     onItemC(text){
        this.props.ItemChanged(text)
    }

    onQuanC(text){
      this.props.QuanChanged(text)
  }
    onNameC(text){
        this.props.NameChanged(text)
    }

    getItems(){
        console.log(this.props.items,'items');
        
       // return  this.props.items;

        return this.props.items.filter(items => {
                        return items.itemName.toLowerCase().indexOf( this.props.name.toLowerCase()) !== -1
                    })
      } 

      onButtonPress(){
        //const {email,password} = this.props;
       this.props.clear();
      }

    render(){
      const { goBack,navigate } = this.props.navigation;
      const { itemName,Size,Quan,items } = this.props;
        return(
            <SafeAreaView style={{flex:1}}>
             <Footer nav={navigate} name={this.state.name} item={this.props.items} navigation={goBack} num={_.size(items)}/>
            <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:20,width:'100%'}}>
            <Input
                placeholder='...Search'
                leftIcon={
                    <Icon
                    name='search'
                    size={24}
                    color='#FA2700'
                    />
                }
  containerStyle={{width:'80%',marginBottom:10}}
  value={this.props.name}
  onChangeText = {this.onNameC.bind(this)}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
  inputStyle={{marginLeft:5}}
  errorMessage={this.props.NameError}
  inputContainerStyle={{width: '100%'}}
/>

<Button onPress={this.onButtonPress.bind(this)}  title='clear' type='outline' raised containerStyle={{alignSelf:'center',width:'15%',marginRight:'3%'}} titleStyle={{color:'white'}} buttonStyle={{ backgroundColor:'#FA2700', borderColor:'#FA2700', width:'100%'}}/>

</View>

<View style={{justifyContent: 'flex-start', borderBottomWidth:1,marginTop:20,  height:Platform.OS === 'ios' ? '30%' :'30%', width:'100%'}}>
        {
          this.renderButton()
        }
        </View>

        <Text style={{width:'90%',marginTop:20,fontSize:20,marginLeft:'5%'}}>Add Item</Text>

        <Input
  placeholder='Item Name'
  
  containerStyle={{marginTop:10}}
  value={this.props.itemName}
  onChangeText = {this.onItemC.bind(this)}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
  inputStyle={{marginLeft:7}}
  errorMessage={this.props.ItemError}
  inputContainerStyle={{width: '90%',alignSelf:'center'}}
/>


<Input
  placeholder='Size'
 
  onChangeText = {this.onSizeC.bind(this)}
  value={this.props.Size}

  inputStyle={{marginLeft:7}}
  errorStyle={{ color: 'red',marginLeft:'5%' }}
 errorMessage={this.props.SizeError}
  inputContainerStyle={{width: '90%',alignSelf:'center',marginTop:30}}
/>

<Input

 value={this.props.Quan}
  inputStyle={{marginLeft:7}}
  onChangeText = {this.onQuanC.bind(this)}
  placeholder='Quantity'
  errorStyle={{ color: 'red',marginLeft:'5%' }}
 errorMessage={this.props.QuanError}
  inputContainerStyle={{width: '90%',alignSelf:'center',marginTop:30}}
/>

        <TouchableOpacity style={{alignSelf:'flex-end',marginRight:30,marginTop:10}} onPress={()=> this.props.addItem({itemName,Size,Quan})}> 
       <Icon name="plus" color='#FA2700' size={30} style={{alignSelf: 'flex-end'}}/>
         
          <Text style={{fontSize:15,color:'#282828'}}>Add</Text>
        
        </TouchableOpacity>

       

            </SafeAreaView>
        )
    }

}

const mapStateToProps = state =>{
    const items = _.map(state.item.items,(Val,uid) =>{
        return {...Val};
      });
    return{
      QuanError:state.item.QuanError,
      Quan:state.item.Quan,
        name:state.auth.name,
        NameError:state.auth.NameError,
        Size:state.item.Size,
        SizeError:state.item.SizeError,
        Loader:state.auth.Loader,
        itemName:state.item.itemName,
        ItemError:state.item.ItemError,
        items,
      }
}

export default connect(mapStateToProps,{QuanChanged,SizeChanged,ItemChanged,NameChanged,FetchItems,addItem,clear})(ItemDisplayScreenView);

