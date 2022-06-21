import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import simularCredito from './screens/simularCredito.js';
import listadoSimulaciones from './screens/listadoSimulaciones.js';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2d55ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="simularCredito"
        component={simularCredito}
        options={{ title: 'Simulador de crédito' }}
      />
      <Stack.Screen
        name="listadoSimulaciones"
        component={listadoSimulaciones}
        options={{ title: 'Lista de simulaciones' }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}