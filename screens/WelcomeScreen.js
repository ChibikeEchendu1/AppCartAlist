import React, {Component} from 'react'
import {View,Image,Animated,AsyncStorage} from 'react-native'
import Slides from '../components/Slides'
import {logincheck} from '../actions'
import {connect} from 'react-redux'


const SLIDE_DATA = [
    {
        text: 'Welcome To CartAList',color: 'red',icon: 'arrow-right' ,
    },
    {
        text: 'Set Your Locarion',color: '#6A6A6A',icon: "map-marker",
    },
    {
        text: 'Create Shopping Lists',color: 'red', icon: 'cart-plus',
    },

    {
        text: 'Get Cart On Arrival',color: '#6A6A6A', icon: 'shopping-basket',
    }
]



 



class WelcomeScreen extends Component{
    
    
     state = {
        fadeAnim: new Animated.Value(0), 
        splash:'',
        move:''
    }
      


    async componentDidMount () {  

       

        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
              toValue: 1,                   // Animate to opacity: 1 (opaque)
              duration: 1000,              // Make it take a while
            }
          ).start(() => {
            this.setState({ fadeAnim: new Animated.Value(1) },
  () => {
    Animated.timing(          // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 3000,       // 2000ms
      }
    ).start(() => {setTimeout (() => {
        this.setState({splash:'done'})
        this.setState({move:'done'})
     }, 100);});
  })
          })

          this.props.logincheck()

        }


        onSlideComplete = () =>{
            this.props.navigation.navigate('LoginScreen')
        }

        Login(){
          if (this.props.logedin) {
            this.props.navigation.navigate('Main');
        }
        }

       

        onSlideCompleteSign = () =>{
            this.props.navigation.navigate('SignUpScreen')
        }
/*   */

    renderButton(){
        let { fadeAnim } = this.state;
        if(this.state.splash == ''){

            

          return(
              <Animated.View  style={{
                ...this.props.style,
                opacity: fadeAnim, backgroundColor:'white'       // Bind opacity to animated value
              }}>
              <Image resizeMode='contain' style={{width:'100%', height:'100%'}} source={require('../images/logo.jpeg')}/>
              </Animated.View>
          )
        }
        else{
            return (<Slides onComplete={this.onSlideComplete} onCompleteSign={this.onSlideCompleteSign} data={SLIDE_DATA}/>);
        }
      }


    render(){
      return(
            [this.renderButton(),this.Login()]
        )
       }
}

const mapStateToProps = state =>{
 
  return{
    logedin: state.auth.logedin,
      password:state.auth.password,
   }
}


export default connect(mapStateToProps,{logincheck})(WelcomeScreen);

