import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Estilos} from '../styles/Estilos';
import {validarContraseña} from '../scripts/Ayudante'

export default class RegisterEmail extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password_1: '',
            password_2: '',
            photoURI: '',
        }
    }
    
    confirmarInfo = () =>{
        if(!this.state.email){
            alert('Correo no valido');
        }
        else{
            if(!this.state.password_1){
                alert('Falta contraseña');
            }
            else{
                if(!this.state.password_2){
                    alert('Falta comprobacion')
                }
                else{
                    if(validarContraseña(this.state.password_1, this.state.password_2)){
                        this.props.navigation.navigate('Datos Usuario', {email: this.state.email,
                            password: this.state.password_2,
                            userType: this.props.route.params.userType,
                            photoURI: 'vacio'})
                    }
                    else{
                        alert('Las constraseñas no coinciden');
                    }
                }
            }
        }
    }

    render(){
        return(
            <View style={Estilos.contenedor}>
                <Text>Correo Electrónico: </Text>
                <TextInput style={Estilos.registro} placeholder={'Escribe tu correo'} keyboardType={"email-address"} onChangeText={(email) => this.setState({email})} autoCapitalize={"none"} textContentType={'emailAddress'}></TextInput>

                <Text>Contraseña</Text>
                <TextInput style={Estilos.registro} placeholder={'Escribe tu contraseña'} onChangeText={(password_1) => this.setState({password_1})} autoCapitalize={"none"} secureTextEntry={true}></TextInput>
                <Text>Confirma tu contraseña</Text>
                <TextInput style={Estilos.registro} placeholder={'Escribe tu contraseña'} onChangeText={(password_2) => this.setState({password_2})} autoCapitalize={"none"} secureTextEntry={true}></TextInput>

                <Button onPress={() => this.confirmarInfo()} title="Confirmar"/>
            </View>
        );
    }
}