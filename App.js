/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import CreateListScreen from './screens/CreateListScreen'
import ListOfListScreen from './screens/ListOfListScreen'
import StoreSearch from './screens/StoreSearch'
import SignUpScreen from './screens/SignUpScreen'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {


  render() {

    
    return (
     null
    );
  }

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const TabNavigator = createBottomTabNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  LoginScreen:{screen:LoginScreen},
  SignUpScreen:{screen:SignUpScreen},
  Main:{
    screen:createBottomTabNavigator({
      Search:{screen: createStackNavigator({
        StoreSearch:{screen:StoreSearch},
    },)
  },

  New:{screen: createStackNavigator({
    CreateListScreen:{screen:CreateListScreen},

   },)
},

Old:{screen: createStackNavigator({
  ListOfListScreen:{screen:ListOfListScreen},

},)
},
  


})
  }
})

export default createAppContainer(TabNavigator);
