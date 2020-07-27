import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Estilos} from '../styles/Estilos';

export default class NewRegisterScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            userType: '',
        }
    }
    render(){
        return(
            <View style={Estilos.contenedor}>
                <Text>Te damos la bienvenida al sistema de registro de Connect2Drs</Text>
                <Text>Por favor seleccione la opción deseada para crear una cuenta</Text>
                <Button onPress={()=>this.props.navigation.navigate('Registrar Correo', {userType: 'Doctor'})} title="Soy Doctor"/>
                <Button onPress={()=>this.props.navigation.navigate('Registrar Correo', {userType: 'Paciente'})} title="Soy Paciente"/>
            </View>
        );
    }
}