import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Estilos} from '../styles/Estilos';

export default class FotoScreen extends Component{
    render(){
        return(
            <View style={Estilos.contenedor}>
                <Text>Nuevo Registro</Text>
            </View>
        );
    }
}