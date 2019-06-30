import React,{Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager ,AccessToken,GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
import {loginUserFB,loginUserGoogle} from '../actions'
import {connect} from 'react-redux'

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId :  Platform.OS === 'ios' ?  '280069859300-aniuaejb7ubdqnnhn1ib9mn0ajpojm2j.apps.googleusercontent.com' : '280069859300-j1v3ubj3ieufs4dnpuee6mk93vjgjihk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '280069859300-aniuaejb7ubdqnnhn1ib9mn0ajpojm2j.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //androidClientId:'280069859300-j1v3ubj3ieufs4dnpuee6mk93vjgjihk.apps.googleusercontent.com'
});

class AuthFooter extends Component {
  constructor(props){
    super(props)
  
    
    this.state ={ namefb:'',emailfb:'',namegoogle:'',emailgoogle:'' }
    this._responseInfoCallback=this._responseInfoCallback.bind(this);
  }
//state object




  facebooklog = () =>{
    console.log(this.state.namefb);
    
  }



  googlelog = () =>{
    console.log(this.state.namegoogle);
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('hgjhuuy');
      const userInfo = await GoogleSignin.signIn();
      console.log('hgjhuuy');
      //this.setState({ userInfo });
      console.log('User Info --> ', userInfo);
     // this.setState({'namegoogle':userInfo.user.name,'emailgoogle':userInfo.user.email})
      const namegoogle = userInfo.user.name
    const emailgoogle = userInfo.user.email
    console.log(namegoogle,emailgoogle,'name email');
     // this.googlelog()
    
      this.props.loginUserGoogle({namegoogle,emailgoogle});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancled');
        
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('cancled');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('cancled');
      } else {
        console.log(error.code,"error");
        
        
      }
    }
  };

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ' + result.toString(), result);
      const namefb = result.name
      const emailfb = result.email
     // this.setState({'namefb':namefb,'emailfb':emailfb})
      this.props.loginUserFB({namefb,emailfb});
    }
  }


  _fbAuth = async () => {
    await LoginManager.logInWithReadPermissions(["public_profile","email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );


          
        
          
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );

    const infoRequest = new GraphRequest(
      '/me',
       {
        httpMethod: 'GET',
        version: 'v2.5',
        parameters: {
            'fields': {
                'string' : 'email,name'
            }
        }
    },
      this._responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  };



  render() {

    return(
    <View style={styles.viewStyle}>
    <View>
       <Text style={{fontSize:20,color:'#FA2700',alignSelf:'center'}}>{this.props.use}</Text>
       </View>

       <View style={{flexDirection:'row',marginTop:20, justifyContent:'space-evenly'}}>
       <TouchableOpacity onPress={this._fbAuth}>
       <Icon color='#FA2700' name="facebook-square" size={30} style={{alignSelf: 'center'}}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.signIn}>
       <Icon color='#FA2700' name="google-plus-square" size={30} style={{alignSelf: 'center'}}/>
       </TouchableOpacity>
       </View>
       </View>
    );

}
}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
       //borderWidth:5,
        position:'absolute',
       //flex:1,
       //marginBottom:20,
        bottom:0,
        width: '100%',
        justifyContent: 'center',
        alignSelf:'flex-end',
        height: '15%',
        backgroundColor: 'white',
    },

   
});

const mapStateToProps = state =>{
  return{
      
      Loader:state.auth.Loader,

      
  }
}


export default connect(mapStateToProps,{loginUserFB,loginUserGoogle})(AuthFooter);
