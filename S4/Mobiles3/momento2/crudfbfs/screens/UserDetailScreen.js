import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, ActivityIndicator, View, Button } from 'react-native';
import db from '../database/firebaseDb';
import * as firestore from "firebase/firestore";
class UserDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      mobile: '',
      passwd:'',
      isLoading: true
    };
  }

  componentDidMount() {
    firestore.getDocs(firestore.collection(db, "users"))
      .then((docs) => {
        docs.forEach((res) => {
          if (res.id === this.props.route.params.userkey) {
            this.setState({
              name: res.data().name,
              email: res.data().email,
              mobile: res.data().mobile,
              passwd: res.data().passwd
            })
          }
        });
      });
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  addUser(){
    this.props.navigation.navigate('AddUserScreen')
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Nombre'}
            value={this.state.name}
            onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Correo Electrónico'}
            value={this.state.email}
            onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Móvil'}
            value={this.state.mobile}
            onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Contraseña'}
            value={this.state.passwd}
            onChangeText={(val) => this.inputValueUpdate(val, 'passwd')}
          />
        </View>
        <View>
          <Button
            title='Agregar un nuevo usuario'
            onPress={() => this.addUser()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7,
  }
})
export default UserDetailScreen;
