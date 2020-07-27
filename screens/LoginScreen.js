import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Estilos} from '../styles/Estilos';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    saveToken = async (token) => {
        await AsyncStorage.setItem('token', token);
    }

    obtenerUsuario(){
        fetch('https://con2doc.live/authentication/token/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then((response)=> response.json())
        .then((responseData) => {
            console.log(
                "POST Response", "Response Body -> "+ JSON.stringify(responseData)
            )
            console.log(responseData[1].name)
            this.props.navigation.navigate('Bienvenido Usuario', {name : responseData[1].name})
        })
        .catch(error => {
            this.setState({error, loading: false})
        });

    }
    render(){
        return(
            <View style={Estilos.contenedor}>
                <TextInput style={Estilos.registro} placeholder={'Correo Electrónico'} keyboardType={"email-address"} onChangeText={(email) => this.setState({email})} autoCapitalize={"none"} textContentType={'emailAddress'}/>
                <TextInput style={Estilos.registro} placeholder={'Contraseña'} onChangeText={(password) => this.setState({password})} autoCapitalize={"none"} secureTextEntry={true}/>
                <Button onPress={()=>this.obtenerUsuario()} title="Iniciar Sesión"/>
            </View>
        );
    }
}