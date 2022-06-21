import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, FlatList, Text } from 'react-native';
import db from '../dataBase/fireaseDb.js';
import * as firestore from "firebase/firestore";
import { TouchableOpacity } from 'react-native';

let convertCop =  Intl.NumberFormat('es-CO')
class listadoSimulaciones extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      userArr: []
    };

  }
  componentDidMount() {
    this.getCollection()
  }
  getCollection = () => {
    const userArr = [];
    firestore.getDocs(firestore.collection(db, "credits"))
      .then((docs) => {
        docs.forEach((res) => {
          const { email, valorPrestamo, tipoPrestamo, numCuotas, totalDeuda, valorCuota } = res.data();
          userArr.push({
            key: res.id,
            email,
            valorPrestamo,
            tipoPrestamo,
            numCuotas,
            totalDeuda,
            valorCuota,
            
          });
        });
        this.setState({
          userArr,
          isLoading: false,
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )
    }
    return (
      <ScrollView>
        <FlatList
          data={this.state.userArr}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{backgroundColor:'#FFFFFF', padding:10,borderRadius:10,marginLeft:'10%',width:'80%',marginTop:20}}
               onPress={() => {
                 this.props.navigation.navigate('simularCredito', {
                   userkey: item.key
                 });
               }}
              >
              <Text style={{color:'black', marginVertical: 10}}>{item.key}</Text>
              <View style={styles.dflex}><Text style={{color:'black',fontWeight:'bold'}}>Email: </Text><Text>{item.email}</Text></View>
              <View style={styles.dflex}><Text style={{color:'black',fontWeight:'bold'}}>Valor del prestamo: </Text><Text>{convertCop.format(item.valorPrestamo)}</Text></View>
              <View style={styles.dflex}><Text style={{color:'black',fontWeight:'bold'}}>Tipo de prestamo: </Text><Text>{item.tipoPrestamo}</Text></View>
              <View style={styles.dflex}><Text style={{color:'black',fontWeight:'bold'}}>Número de cuotas: </Text><Text>{item.numCuotas}</Text></View>
              <Text style={{color:'black',fontWeight:'bold', marginTop: 10}}>Total deuda</Text>
              <Text style={styles.totales}>${convertCop.format(item.totalDeuda)}</Text>
              <Text style={{color:'black',fontWeight:'bold', marginTop: 10}}>Valor cuota</Text>
              <Text style={styles.totales}>${convertCop.format(item.valorCuota)}</Text>
            </TouchableOpacity>
            
          )}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
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
  dflex:{
    flex: 1,
    flexDirection: 'row',
  },
  totales: {
    fontSize: 20
  }
})
export default listadoSimulaciones;