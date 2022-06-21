import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import db from '../dataBase/fireaseDb.js';
import { collection, addDoc } from "firebase/firestore";
import * as firestore from "firebase/firestore";
import RNPickerSelect from 'react-native-picker-select';
const Separator = () => (
  <View style={styles.separator} />
);
let convertCop =  Intl.NumberFormat('es-CO')
class simularCredito extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        valorPrestamo: '',
        tipoPrestamo: '',
        numCuotas:'',
        totalDeuda: '',
        valorCuota: '',
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser(){
    firestore.getDocs(firestore.collection(db, "credits"))
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
        else if(this.state.email=== '' || this.state.valorPrestamo === '' || this.state.tipoPrestamo === '' || this.state.numCuotas === ''){
          alert('Completa los siguientes campos: Correo electrónico, Valor del prestamo, Tipo de prestamo y Número de cuotas')
          
        }else if(this.state.valorPrestamo >= 1000000 && this.state.valorPrestamo <= 1000000000){
          this.setState({isLoading: true})
          try {
            this.setState({isLoading: false})
            let minteres = 0
            switch (this.state.tipoPrestamo) {
              case 'vivienda':
                minteres = 1/100
                break;
              case 'educacion':
                minteres = 0.5/100
                break;
              case 'libre':
                minteres = 1.5/100
                break;
            }
            let total = (parseFloat(this.state.valorPrestamo)*minteres*parseFloat(this.state.numCuotas)+parseFloat(this.state.valorPrestamo))
            let cuota = total/parseFloat(this.state.numCuotas)
            const docRef = addDoc(collection(db, "credits"), {
                email: this.state.email,
                valorPrestamo: this.state.valorPrestamo,
                tipoPrestamo: this.state.tipoPrestamo,
                numCuotas: this.state.numCuotas,
                totalDeuda: total,
                valorCuota: cuota,
            });
            alert("Simulación de crédito realizada con éxito ...");
            this.setState({email: this.state.email});
            this.setState({valorPrestamo: this.state.valorPrestamo});
            this.setState({tipoPrestamo: this.state.tipoPrestamo});
            this.setState({numCuotas: this.state.numCuotas});
            this.setState({totalDeuda: total});
            this.setState({valorCuota: cuota});
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
        else{
          alert('El valor del prestamo debe ser entre $1.000.000 COP a $100.000.000 COP')
        }
      });
}

  listCredits(){
      this.props.navigation.navigate('listadoSimulaciones')
  }
  limpiar(){
    this.setState({email: ''});
    this.setState({valorPrestamo: ''});
    this.setState({tipoPrestamo: ''});
    this.setState({numCuotas: ''});
    this.setState({totalDeuda: ''});
    this.setState({valorCuota: ''});
  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
              placeholder='pepito@gmail.com'
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Valor del prestamo</Text>
          <TextInput
              placeholder='Entre $1.000.000 y $100.000.000'
              value={this.state.valorPrestamo}
              onChangeText={(val) => this.inputValueUpdate(val, 'valorPrestamo')}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tipo de prestamo</Text>
          <RNPickerSelect
              style={styles}
              onValueChange={(val) => this.inputValueUpdate(val, 'tipoPrestamo')}
              items={[
                  { label: 'Seleccione el tipo de prestamo', value: '' },
                  { label: 'Vivienda', value: 'vivienda' },
                  { label: 'Educación', value: 'educacion' },
                  { label: 'Libre inversión', value: 'libre' },
              ]}
              value={this.state.tipoPrestamo}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Número de cuotas</Text>
          <TextInput
              placeholder='Ingresa el número de cuotas'
              value={this.state.numCuotas}
              onChangeText={(val) => this.inputValueUpdate(val, 'numCuotas')}
          />
        </View>
        <View>
          <Text style={styles.h3}>Resultado de la simulación</Text>
        </View>
        <Separator />
        <View style={styles.inputDisabled}>
          <Text style={styles.label}>Total deuda</Text>
          <TextInput
            disabled={true}
            value={convertCop.format(this.state.totalDeuda)}
            onChangeText={(val) => this.inputValueUpdate(val, 'totalDeuda')}
          />
        </View>
        <View style={styles.inputDisabled}>
          <Text style={styles.label}>Valor cuota</Text>
          <TextInput
            disabled={true}
            value={convertCop.format(this.state.valorCuota)}
            onChangeText={(val) => this.inputValueUpdate(val, 'valorCuota')}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonSimular}
          onPress={()=>this.storeUser()}
        >
          <Text style={{color: '#FFFFFF'}}>Simular crédito</Text>
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity
          style={styles.buttonLimpiar}
          onPress={()=>this.limpiar()}
        >
          <Text style={{color: '#000000'}}>Limpiar campos</Text>
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity
          style={styles.buttonLimpiar}
          onPress={()=>this.listCredits()}
        >
          <Text style={{color: '#000000'}}>Listado de simulaciones</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginVertical: 20
  },
  inputGroup: {
    flex: 1,
    padding: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  inputDisabled: {
    flex: 1,
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#d3d3d3'
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
  label:{
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 10
  },
  h3: {
    fontSize: 18,
    fontWeight: 600
  },
  select:{
    backgroundColor: 'black'
  },
  buttonSimular:{
    backgroundColor: '#2d55ff',
    padding: 10,
    textAlign:'center',
    borderRadius: 4,
  },
  buttonLimpiar:{
    backgroundColor: '#becaff',
    padding: 10,
    textAlign:'center',
    borderRadius: 4,
  },
  separator: {
    marginBottom: 20
  },
  inputWeb:{
    border: 'none'
  }
})
export default simularCredito;