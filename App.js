import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginChat from './screens/LoginChat';
import CallScreen from './screens/CallScreen';
import CameraScreen from './screens/CameraScreen';
import FotoScreen from './screens/FotoScreen';
import HomeScreen from './screens/HomeScreen';
import HomeScreen_Doctor from './screens/HomeScreen_Doctor';
import HomeScreen_User from './screens/HomeScreen_User';
import LoginScreen from './screens/LoginScreen';
import NewRegisterScreen from './screens/NewRegisterScreen';
import RegisterCedula from './screens/RegisterCedula';
import RegisterEmail from './screens/RegisterEmail';
import RegisterDoctorDataPlus from './screens/RegisterDoctorDataPlus';
import RegisterScreen_User from './screens/RegisterScreen_User';

const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      enlace : 'vacio'
    }
  }

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bienvenido" component={HomeScreen} />
          <Stack.Screen name="Bienvenido Doctor" component={HomeScreen_Doctor} />
          <Stack.Screen name="Bienvenido Usuario" component={HomeScreen_User} />
          <Stack.Screen name="Log In" component={LoginScreen} />
          <Stack.Screen name="Login Chat" component={LoginChat} options={{headerShown: false}}/>
          <Stack.Screen name="Call" component={CallScreen} />
          <Stack.Screen name="Nuevo Registro" component={NewRegisterScreen} />
          <Stack.Screen name="Registro de Cedula" component={RegisterCedula} />
          <Stack.Screen name="Registrar Correo" component={RegisterEmail} />
          <Stack.Screen name="Datos Adicionales" component={RegisterDoctorDataPlus} />
          <Stack.Screen name="Datos Usuario" component={RegisterScreen_User} />
          <Stack.Screen name="Tomar Foto" component={CameraScreen} />
          <Stack.Screen name="Seleccionar foto" component={FotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}