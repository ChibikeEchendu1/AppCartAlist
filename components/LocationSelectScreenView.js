import React, {Component} from 'react'
import {SafeAreaView,View,Text,ListView,ActivityIndicator} from 'react-native'
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeHeader} from './HomeHeader'
import _ from 'lodash';
import {FetchLocations,NameChanged} from '../actions'
import LocationHouse  from './LocationHouse'
import {connect} from 'react-redux'
class LocationSelectScreenView extends Component{

    constructor(props){
        super(props);
      this.state = {
        log:'',
        _id:this.props.navigation.state.params._id,
    }
        this.renderRow=this.renderRow.bind(this);
      }

      componentWillMount(){
        this.props.FetchLocations()
        console.log(this.state._id);
        
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
        return <LocationHouse  _id ={this.state._id} item={item} Name={item.Name} />
       }


       Login(){
        if (this.props.logedin){
          this.props.navigation.navigate('CreateListScreen');
      }
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
        const { goBack } = this.props.navigation;
        return(
            <SafeAreaView style={{flex:1}}>
                <HomeHeader navigation={goBack}  title='Location'/>
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


</View>


<View style={{justifyContent: 'flex-start', borderBottomWidth:1,marginTop:20,  height:'65%', width:'100%'}}>
        {
          this.renderButton()
        }
        </View>
        {this.Login()}
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state =>{
    const items = _.map(state.auth.items,(Val,uid) =>{
        return {...Val};
      });
    return{
        name:state.auth.name,
        Loader:state.auth.Loader,
        logedin:state.auth.logedin,
        items
    }
}

export default connect(mapStateToProps,{FetchLocations,NameChanged})(LocationSelectScreenView);
