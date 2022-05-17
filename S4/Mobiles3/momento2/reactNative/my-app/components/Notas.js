import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
function formNotas(){
    return(
        <View style={mystyles.mycontainer}>
            <Text>Sistema de notas</Text>
            <View>
                <Text style={styles.textColor}>Asignatura</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Ingrese la asignatura'
                onChangeText={nombre => setNombre(nombre)}
                value={nombre}
            />
            </View>
        </View>
    );
}

const mystyles = StyleSheet.create({
    mycontainer:{
        width: '400'
    }
})