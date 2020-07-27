import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Estilos} from '../styles/Estilos';

export default class HomeScreen_Doctor extends Component{
    render(){
        return(
            <View style={Estilos.contenedor}>
                <Text>{this.props.route.params.email}</Text>
            </View>
        );
    }
}