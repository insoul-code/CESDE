import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
class App extends React.Component{
  constructor(props){
    super(props)
    //Definir los estados del componente
    this.state = {
      asignatura: '',
      nota1: 0,
      nota2: 0,
      nota3: 0,
      definitiva: 0,
      observacion: ''
    }
  }

  calculateDefinitiveNote(){
    let nota1 = this.state.nota1
    let nota2 = this.state.nota2
    let nota3 = this.state.nota3
    let definitiveNote = parseFloat(nota1*0.30)+parseFloat(nota2*0.35)+parseFloat(nota3*0.35)
    this.setState({definitiva: definitiveNote})
    if(this.setState({definitiva: definitiveNote}) === 3){
      this.setState({observacion: 3})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Sistema de notas{'\n'}</Text>
        <Separator />
        <Text>Asignatura</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese el nombre de la asignatura'
          onChangeText={(asignatura)=>this.setState({asignatura})}
          value={this.state.asignatura}
        />
        <Text>Nota momento 1</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese la nota del momento1'
          onChangeText={(nota1)=>this.setState({nota1})}
          value={this.state.nota1}
        />
        <Text>Nota momento 2</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese la nota del momento1'
          onChangeText={(nota2)=>this.setState({nota2})}
          value={this.state.nota2}
        />
        <Text>Nota momento 3</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Ingrese la nota del momento1'
          onChangeText={(nota3)=>this.setState({nota3})}
          value={this.state.nota3}
        />
        <Text>Nota definitiva</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.definitiva}
        />
        <Text>Observación</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.observacion}
        />
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={()=>this.calculateDefinitiveNote()}
        >
          <Text style={{color: '#FFFFFF'}}>Calcular definitiva</Text>
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
    width: 200,
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

