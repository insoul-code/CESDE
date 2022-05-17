import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Titulos from './components/Titulos';
import React, { useEffect, useState } from 'react';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  //Comisiones
  const [nombre, setNombre] = useState('');
  const [valorVenta, setValor] = useState(0);
  let [comision, setComision] = useState(0);
  let [salario, setSalario] = useState('');
  const [totalPpagar, setTotalPagar] = useState('');

  //Métodos
  const validarDatos = () =>{
    if(nombre === '' || valorVenta === '' || salario === ''){
      alert('Debes ingresar todos los datos')
    }
    else{
      alert(`Nombre: ${nombre}, Valor venta: $${valorVenta}, Salario: $${salario}`)
    }
  }

  const calcularComision = () =>{
    //Invocar método del estado de comision
    setComision(valorVenta*4/100)
    setTotalPagar(parseInt(salario)+ parseInt(comision))
  }

  const limpiar = () =>{
    setComision(''),
    setNombre(''),
    setSalario(''),
    setValor(''),
    setTotalPagar('')
  }

  useEffect(()=>{
    setComision(valorVenta * 4/100)
  })

  //Notas
  const [asignatura, setAsignatura] = useState('');
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [definitiva, setDefinitiva] = useState(0);
  const [observacion, setObservacion] = useState('');

  //Métodos para las notas
  const limpiarNotas = () =>{
    setAsignatura(''),
    setNota1(''),
    setNota2(''),
    setNota3(''),
    setDefinitiva(''),
    setObservacion('')
  }

  const calclularDefinitiva = () =>{
    setDefinitiva((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3)
  }

  return (
    <View style={styles.container}>
      <View style={{flex:1,backgroundColor:'#192c38',height:'100%'}}>
        <Text style={styles.textColor}>Capa 1</Text>
      </View>
      <View style={{flex:5,backgroundColor:'#091822',height:'auto'}}>
        {/* <Titulos></Titulos> */}
        <View style={styles.paddingCont}>
          {/*Inicia sistema comisión */}
          {/* <Text style={[styles.textColor, styles.title]}>Sistema manejo de ventas por empleado</Text>
          <Text style={styles.textColor}>Nombre</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingrese el nombre'
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
          />
          <Text style={styles.textColor}>Salario</Text>
          <TextInput style={styles.textInput}
            placeholder='Ingrese el salario'
            onChangeText={salario => setSalario(salario)}
            value={salario}
          />
          <Text style={styles.textColor}>Valor de la venta</Text>
          <TextInput style={styles.textInput}
            placeholder='Ingrese el valor de la venta'
            onChangeText={valorVenta => setValor(valorVenta)}
            value={valorVenta}
          />
          <Text style={styles.textColor}>Valor de la comisión</Text>
          <TextInput style={styles.textInput}
            value={comision}
          />
          <Text style={styles.textColor}>Total a pagar</Text>
          <TextInput style={styles.textInput}
            value={totalPpagar}
          />
          <View style={styles.buttonsGroup}>
            <Button
              onPress={()=>validarDatos}
              color="#841584"
              title='Validar datos'
            />
            <Separator />
            <Button
              color='#524eb7'
              onPress={()=>calcularComision()}
              title='Calcular comisión'
            />
            <Separator />
            <Button
              color='#1e517b'
              onPress={limpiar}
              title='Limpiar datos'
            />
          </View> */}
          {/* Finaliza sistema comisión */}

          {/* Inicia sistema notas */}
          <Text style={[styles.textColor, styles.title]}>Sistema manejo Notas</Text>
          <Text style={styles.textColor}>Asignatura</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingrese la asignatura'
            onChangeText={asignatura => setAsignatura(asignatura)}
            value={asignatura}
          />
          <Text style={styles.textColor}>Nota momento 1</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingrese la nota 1'
            onChangeText={nota1 => setNota1(nota1)}
            value={nota1}
          />
          <Text style={styles.textColor}>Nota momento 2</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingrese la nota 2'
            onChangeText={nota2 => setNota2(nota2)}
            value={nota2}
          />
          <Text style={styles.textColor}>Nota momento 3</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingrese la nota 3'
            onChangeText={nota3 => setNota3(nota3)}
            value={nota3}
          />
          <Text style={styles.textColor}>Nota definitiva</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={definitiva => setDefinitiva(definitiva)}
            value={definitiva}
          />
          <Text style={styles.textColor}>Observación</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={observacion => setObservacion(observacion)}
            value={observacion}
          />
           <View style={styles.buttonsGroup}>
            <Button
              color="#841584"
              onPress={calclularDefinitiva}
              title='Calcular definitiva'
            />
            <Separator />
            <Separator />
            <Button
              color='#1e517b'
              onPress={limpiarNotas}
              title='Limpiar datos'
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0a1014',
    paddingHorizontal: 100,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 18,
    marginBottom: 15
  },
  textColor: {
    color: '#fff'
    
  },
  paddingCont: {
    padding: 10
  },
  textInput:{
    backgroundColor: '#324957',
    color: '#FFFFFF',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 400,
    borderRadius: 4
  },
  buttonsGroup:{
    display: 'flex',
    flexDirection: 'row'
  },
  separator: {
    marginRight: 5
  },
});
