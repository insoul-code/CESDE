import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
let convertCop =  Intl.NumberFormat('es-CO')

class App extends React.Component{
  constructor(props){
    super(props)
    //Definir los estados del componente
    this.state = {
      vlrVenta: '',
      salario: '',
      comision: '',
      totalPagar: ''
    }
  }
  //Definir los métodos que utiliza el componente
  calculate(){
    //Calcular comisión}
    this.setState({comision: this.state.vlrVenta * 2/100})
    let miComision = this.state.vlrVenta * 2/100
    this.setState({totalPagar: parseFloat(this.state.salario) + miComision})
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Sistema de ventas{'\n'}</Text>
        <Separator />
        <Text>Valor de la venta</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese el valor de la venta'
          onChangeText={(vlrVenta)=>this.setState({vlrVenta})}
          value={this.state.vlrVenta}
        />
        <Text>Salario</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese el salario'
          onChangeText={(salario)=>this.setState({salario})}
          value={this.state.salario}
        />
        <Text>Comisión por la venta</Text>
        <TextInput
          style={styles.textInput}
          value={convertCop.format(this.state.comision)}
        />
        <Text>Total a pagar</Text>
        <TextInput
          style={styles.textInput}
          value={convertCop.format(this.state.totalPagar)}
        />
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={()=>this.calculate()}
        >
          <Text style={{color: '#FFFFFF'}}>Calcular</Text>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  textInput:{
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 400,
    borderRadius: 4
  },
  buttonPrimary:{
    backgroundColor: '#2d55ff',
    padding: 10,
    width: 100,
    textAlign:'center',
    borderRadius: 4,
  },
  title:{
    fontSize: 20
  },
  separator: {
    marginBottom: 20
  }
});

export default App;