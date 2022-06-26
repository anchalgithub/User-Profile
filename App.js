import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer, createSwitchNavigator } from 'react-navigation'
import Profile from './screens/Profile';
import Login from './screens/Login';
import SignUp from './screens/SignUp'

import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return(
      <Container/>
    )
  }
}
const Switch = createSwitchNavigator({
  Login:{screen:Login},
  SignUp:{screen:SignUp},
    Profile:{screen:Profile},


})
const Container = createAppContainer(Switch)