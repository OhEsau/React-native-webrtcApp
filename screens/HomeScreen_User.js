import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Estilos} from '../styles/Estilos';

export default class HomeScreen_User extends Component{
    render(){
        return(
            <View style={Estilos.contenedor}>
                <Text>{this.props.route.params.name}</Text>
                <Button onPress={()=>this.props.navigation.navigate('Login Chat', {name: this.props.route.params.name})} title="Video Llamada"></Button>
            </View>
        );
    }
}