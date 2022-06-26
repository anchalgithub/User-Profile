import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase'

export default class SignUp extends React.Component {

   constructor(){
    super();
    this.state={
      email:'',
      pwd:'',
      confirmpwd:''
    }
  }
  signup = (email, pwd) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then((response) => {
        alert('User Added Successfully' + response);
        var user = response.user;

        db.collection("profiles").add({
          email:email,
          name:"",
          account:"",
          address:"",
          image:"https://i.picsum.photos/id/683/200/300.jpg?hmac=LalV5DeTpQsFRVpqJKk0lZ_zRqag95TYBrqTW06L9yw"
        })

        this.props.navigation.navigate('Login');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '70%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 150,
            padding:10
          }}>
          <AntDesign name="mail" size={24} color="#e8d3b9" />
          <TextInput 
            style={{paddingLeft:20, width:'90%'}}
          placeholder="Email" onChangeText={(val)=>{
this.setState({email:val})
          }} />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '70%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 30,
            padding:10
          }}>
          <AntDesign name="lock" size={24} color="#e8d3b9" />
          <TextInput 
            style={{paddingLeft:20, width:'90%'}}
          placeholder="Password" secureTextEntry={true} onChangeText={(val)=>{
this.setState({pwd:val})
          }} />
        </View>

          <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '70%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 30,
            padding:10
          }}>
          <AntDesign name="lock" size={24} color="#e8d3b9" />
          <TextInput 
            style={{paddingLeft:20, width:'90%'}}
           placeholder="Confirm Password" secureTextEntry={true} onChangeText={(val)=>{
this.setState({confirmpwd:val})
          }} />
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 40,
            borderColor: '#e8d3b9',
            borderWidth: 1,
            borderRadius: 5,
            width: '40%',
            backgroundColor: '#e8d3b9',
            padding: 6,
          }}
          onPress={()=>{
            this.signup(this.state.email,this.state.pwd)
          }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Sign Up</Text>
        </TouchableOpacity>

         <Text
          style={{ marginTop: 30 }}
          onPress={()=>{
            this.props.navigation.navigate('Login')
          }}>
          Have an Account? Login
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: '#e8d3b9',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});
