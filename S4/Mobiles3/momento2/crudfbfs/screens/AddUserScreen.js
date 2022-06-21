import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import db from '../database/firebaseDb';
import { collection, addDoc } from "firebase/firestore";
import * as firestore from "firebase/firestore";
class AddUserScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      mobile: '',
      passwd:'',
      isLoading: false
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  storeUser(){
    firestore.getDocs(firestore.collection(db, "users"))
      .then((docs) => {
        docs.forEach((res) => {
          if (res.data().email === this.state.email) {
            this.setState({sw:true})          
          }
        });
        if(this.state.sw){
          alert('Correo repetido')
          this.setState({sw:false})
        }
        else {
          this.setState({isLoading: true})
          try {
            this.setState({isLoading: false})
            const docRef = addDoc(collection(db, "users"), {
              name: this.state.name,
              email: this.state.email,
              mobile: this.state.mobile,
              passwd:this.state.passwd,
              isLoading: true,
            });
            alert("Usuario agregado correctamente ...");
            this.setState({name:''});
            this.setState({email:''});
            this.setState({mobile:''});
            this.setState({passwd:''});
            this.props.navigation.navigate('UserScreen')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      });
}
  listUsers(){
    this.props.navigation.navigate('UserScreen')
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
              multiline={true}
              numberOfLines={4}
              placeholder={'Correo Electrónico'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Nro. de dispositivo móvil'}
              value={this.state.mobile}
              onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              secureTextEntry={true}
              placeholder={'Contraseña'}
              value={this.state.passwd}
              onChangeText={(val) => this.inputValueUpdate(val, 'passwd')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Agregar'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Ir al listado de usuarios'
            onPress={() => this.listUsers()} 
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
    padding: 5,
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
  }
})
export default AddUserScreen;