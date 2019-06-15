import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager } from "react-native-fbsdk";
import { GoogleSignin,statusCodes } from 'react-native-google-signin';


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

  

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('hgjhuuy');
      const userInfo = await GoogleSignin.signIn();
      console.log('hgjhuuy');
      
      console.log('User Info --> ', userInfo);
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


  _fbAuth = async () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
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
  };



const AuthFooter = (props) =>{

    return(
    <View style={styles.viewStyle}>
    <View>
       <Text style={{fontSize:20,color:'#FA2700',alignSelf:'center'}}>{props.use}</Text>
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

export default AuthFooter;