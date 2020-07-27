import React, {Component} from 'react';
import {View, Text, Button,} from 'react-native';
import {Estilos} from '../styles/Estilos';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={Estilos.contenedor}>
                <Text>Nuevo Registro</Text>
                <Button onPress={()=>this.props.navigation.navigate('Log In')} title="Ingresar"/>
                <Button onPress={()=>this.props.navigation.navigate('Nuevo Registro')} title="Registrarse"/>
            </View>
        );
    }
}