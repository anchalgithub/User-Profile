import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

import firebase from 'firebase';
import db from '../config'
export default class Profile extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      account:'',
      address:'',
      image:'',
      email:firebase.auth().currentUser.email,
      id:''
    }
  }
  getProfile= async()=>{
    var temp = await db.collection("profiles").where("email","==",this.state.email).get();
    temp.docs.map((doc)=>{
      var obj = doc.data();
      this.setState({
        image:obj.image,
        name:obj.name,
        address:obj.address,
        account:obj.account,
        id:doc.id
      })
    })
  }

  componentDidMount=()=>{
    this.getProfile()
  }
  onSubmit=()=>{

    db.collection("profiles").doc(this.state.id).update({
      name:this.state.name,
      address:this.state.address,
      account:this.state.account
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={styles.headerTitle}>Profile</Text>
          <Text style={{ fontSize: 16, color: 'black' }}>SAVE</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            margin: 10,
          }}>
          <Avatar
            rounded
            size="large"
            source={{
              uri:
                'https://i.picsum.photos/id/572/200/300.jpg?hmac=Rt4zD8IxoA-nMVDrBQ72mgbTVRfQ6OwW3MhWy_3lpdk',
            }}
          />
        </View>
        <Text style={{ paddingLeft: 40, fontWeight: 'bold' }}>Account</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#eee',
            paddingLeft: 10,
          }}
          placeholder="Name"
          value={this.state.account}
          onChangeText={(val)=>{
            this.setState({account:val})
          }}
        />

        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Name
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#eee',
            paddingLeft: 10,
          }}
          value={this.state.name}

          placeholder="Vivienne Diana"
           onChangeText={(val)=>{
            this.setState({name:val})
          }}
        />

        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Email
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#eee',
            paddingLeft: 10,
          }}
          value={this.state.email}

          placeholder="vividiana@gmail.com"
        />
        <Text style={{ paddingLeft: 40, fontWeight: 'bold', marginTop: 20 }}>
          Address
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#eee',
            paddingLeft: 10,
          }}
          value={this.state.address}

          placeholder="Edinburgh, Scotland"
           onChangeText={(val)=>{
            this.setState({address:val})
          }}
        />

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
          onPress={this.onSubmit}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
