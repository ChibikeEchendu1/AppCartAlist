/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreenPage from './screens/WelcomeScreenPage'
import LoginScreen from './screens/LoginScreen'
import CreateListScreen from './screens/CreateListScreen'
import ListOfListScreen from './screens/ListOfListScreen'
import HistorySearch from './screens/HistorySearch'
import SignUpScreen from './screens/SignUpScreen'
import ListNameScreen from './screens/ListNameScreen'
import ItemDisplayScreen from './screens/ItemDisplayScreen'
import ReviewScreen from './screens/ReviewScreen'
import LocationSelectScreen from './screens/LocationSelectScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

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
  WelcomeScreenPage:{screen:WelcomeScreenPage, navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null,
    tabBarVisible:false
}},
  LoginScreen:{screen:LoginScreen, navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null,
    tabBarVisible:false
}},
  SignUpScreen:{screen:SignUpScreen, navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null,
    tabBarVisible:false
}},
  Main:{
    screen:createBottomTabNavigator({
      History:{screen: createStackNavigator({
        HistorySearch:{screen:HistorySearch},
    },),navigationOptions: {
      gesturesEnabled: false,
      headerLeft:null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="history" size={25} color={tintColor} />
      )
  }
  },

  Home:{screen: createStackNavigator({
    CreateListScreen:{screen:CreateListScreen},
    LocationSelectScreen:{screen:LocationSelectScreen},
    ItemDisplayScreen:{screen:ItemDisplayScreen},
    ListNameScreen:{screen:ListNameScreen},
    ReviewScreen:{screen:ReviewScreen}
   },{headerMode: 'none'}),navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={25} color={tintColor} />
    )
}
},

Lists:{screen: createStackNavigator({
  ListOfListScreen:{screen:ListOfListScreen},

}),navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null,
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list-ul" size={25} color={tintColor} />
  )
}
}




}, {
  initialRouteName: 'Home',
  tabBarOptions:{
  activeTintColor: '#FA2700',
  inactiveColor: '#3e2465',
  showIcon: true ,
  style: {
    backgroundColor: 'white',
  }
 // barStyle: { backgroundColor: '#FA2700' },
 // activeBackgroundColor: '#FA2700',
  }
}),navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null,
  tabBarVisible:false
}
  }
})





export default createAppContainer(TabNavigator);
