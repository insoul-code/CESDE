import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  const [vlrprestamo, setVlrprestamo] = useState('')
  const [tipoPrestamo, setTipoprestamo] = useState('')
  const [nroCuotas, setNrocuotas] = useState(0)
  const [cuotaManejo, setCuotamanejo] = useState(false)
  const [vlrCuota, setVlrCuota] = useState(0)
  const [totalDeuda, setTotalDeuda] = useState(0)
  const itemsPrestamo = [
    {label:'Vivienda', value:'viv'},
    {label:'Educación', value:'edu'},
    {label:'Vehículo', value:'veh'}
  ]

  const itemsNroCuotas = [
    {label:'12', value:'12'},
    {label:'24', value:'24'},
    {label:'36', value:'36'}
  ]

  let calcular = ()=>{
    let minteres
    switch (tipoPrestamo) {
      case 'viv':
        minteres = 1/100
        break;
      case 'edu':
        minteres = 0.5/100
        break;
      case 'veh':
        minteres = 1.5/100
        break;
    }
    let cmanejo = 0
    if(cuotaManejo){
      cmanejo = 10000
    }
    //Calcular la deuda
    let mtdeuda = (parseFloat(vlrprestamo)*minteres*parseFloat(nroCuotas)+parseFloat(vlrprestamo))
    setTotalDeuda(mtdeuda)
    setVlrCuota(mtdeuda/parseFloat(nroCuotas)+cmanejo)
  }
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/credit.png')}
      style={{width:400,height: 150}}></Image>
      <Separator />
      <Text>Valor préstamo</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={(vlrprestamo) => setVlrprestamo(vlrprestamo)}
        value={vlrprestamo}/>
      <RNPickerSelect
        placeholder={{
          label: 'Seleccione tipo de prestamo',
          value: ''
        }}
        onValueChange={(tipoPrestamo) => setTipoprestamo(tipoPrestamo)}
        items={itemsPrestamo}
        value={tipoPrestamo}
        style={styles.textInput}
      />
      <Text>Número de cuotas</Text>
      <RNPickerSelect
        placeholder={{
          label: 'Seleccione el número de cuotas',
          value: ''
        }}
        onValueChange={(nroCuotas) => setNrocuotas(nroCuotas)}
        items={itemsNroCuotas}
        style={styles.textInput}
        value={nroCuotas}
      />
      <Text>Cuota de manejo</Text>
      <Switch
        onValueChange={(cuotaManejo)=>setCuotamanejo(cuotaManejo)}
        value={cuotaManejo}
        >
      </Switch>
      <Text>Valor cuota</Text>
      <TextInput 
      style={styles.textInput}
      value={vlrCuota}/>
      <Text>Total deuda</Text>
      <TextInput 
      style={styles.textInput}
      value={totalDeuda}/>
      <TouchableOpacity
      style={styles.buttonPrimary}
      onPress={calcular}>
        <Text
        style={{color: 'white'}}
        >Calcular</Text>
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
    width: 400,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});
