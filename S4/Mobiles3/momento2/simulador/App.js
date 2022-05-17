import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
const Separator = () => (
  <View style={styles.separator} />
);
export default function App() {
  const [valorPrestamo, setValorPrestamo] = useState(0);
  const [selectedValue, setSelectedValue] = useState("vivienda");
  const [tipoCredito, setTipoCredito] = useState("vivienda");
  const [numeroCuotas, setNumeroCuotas] = useState(0);
  const [valorCuota, setValorCuota] = useState(0);
  const [totalDeuda, setTotalDeuda] = useState(0);

  //Método para limpiar
  const limpiarCampos = () =>{
    setValorPrestamo(0),
    setNumeroCuotas(0),
    setValorCuota(0),
    setTotalDeuda(0)
  }
  const calclularDeuda = () =>{
    if(numeroCuotas < 12 || numeroCuotas > 36){
      alert('Las cuotas deben estarentre 12 y 36 meses, seleccione un número de cueotas en este rango')

    }else if(tipoCredito === 'vivienda' && numeroCuotas >= 12 || numeroCuotas <= 36){
      setTotalDeuda((0.1*parseFloat(valorPrestamo))*(parseFloat(numeroCuotas))+parseFloat(valorPrestamo))
    }
    else if(tipoCredito === 'educacion' && numeroCuotas >= 12 || numeroCuotas <= 36){
      setTotalDeuda((0.05*parseFloat(valorPrestamo))*(parseFloat(numeroCuotas))+parseFloat(valorPrestamo))
    }
  }

  useEffect(()=>{
    setValorCuota(parseFloat(totalDeuda)/parseFloat(numeroCuotas))
  })

  // const validarCuotas = () =>{
  //   if(numeroCuotas < 12 && numeroCuotas > 36){
  //     alert('Las cuotas deben estarentre 12 y 36 meses, seleccione un número de cueotas en este rango')
  //   }
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador{'\n'}</Text>
      <Separator />
      <Text>Valor de préstamo</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={valorPrestamo=>setValorPrestamo(valorPrestamo)}
        value={valorPrestamo}
      />
      <Text>Tipo de préstamo</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.textInput}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Vivienda" value="vivienda" />
        <Picker.Item label="Educación" value="educacion" />
      </Picker>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={tipoCredito => setTipoCredito(tipoCredito)}
        value={tipoCredito}
      />
      <Text>Número de cuotas</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={numeroCuotas => setNumeroCuotas(numeroCuotas)}
        value={numeroCuotas}
      />
      <Text>Valor de la cuota</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={valorCuota=>setValorCuota(valorCuota)}
        value={valorCuota}
      />
      <Text>Total de la deuda</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={totalDeuda=>setTotalDeuda(totalDeuda)}
        value={totalDeuda}
      />
      <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={limpiarCampos}
        >
          <Text>Limpiar</Text>
        </TouchableOpacity>
      <Separator />
       <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={calclularDeuda}
        >
          <Text style={{color: '#FFFFFF'}}>Calcular</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',
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
    width: 400,
    textAlign:'center',
    borderRadius: 4,
  },
  buttonSecondary:{
    backgroundColor: '#cdd1e4',
    Color: '#252958',
    padding: 10,
    width: 400,
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
