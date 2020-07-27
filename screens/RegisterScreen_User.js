import React, {Component} from 'react';
import {View, Text, Button, Image, TextInput} from 'react-native';
import {Estilos} from '../styles/Estilos';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';

export default class RegisterScreen_User extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            first_name: '',
            last_name: '',
            gender: '',
            birthday: '01/01/1930',
            phone: '',
        }
    }

    enlaceFotoID(){
        if(this.props.route.params.photoURI === 'vacio'){
            return(
                require('../Assets/icon.png')
            )
        }
        else return ({uri: this.props.route.params.photoURI})
    }

    siguiente(){
        this.registrarUsuario();
    }

    saveToken = async (token) => {
        await AsyncStorage.setItem('token', token);
    }

    registrarUsuario(){
        fetch('https://con2doc.live/authentication/register/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.props.route.params.email,
                password: this.props.route.params.password,
                name: this.state.name,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                birthday: this.state.birthday,
                phone: this.state.phone,
                gender: this.state.gender,
                client_Type: this.clientType(this.props.route.params.userType),
            })
        })
        .then((response)=> response.json())
        .then((responseData) => {
            console.log(
                "POST Response", "Response Body -> "+ JSON.stringify(responseData)
            )
            this.saveToken(responseData.token);
            this.props.navigation.navigate('Bienvenido Usuario')
        })
        .catch(error => {
            console.log(error);
        });
    }

    clientType(tipo){
        if(tipo === 'Doctor')
            return 1;
        else
            return 0;
    }

    render(){
        return(
            <View style={Estilos.contenedor}>
                <Image style={Estilos.profilePicture} source={this.enlaceFotoID()}/>
                <View style={Estilos.botones}>
                    <Button onPress={() => this.props.navigation.navigate('Tomar Foto')} title="Tomar" />
                    <Button onPress={() => this.props.navigation.navigate('Tomar Foto')} title="Cargar" />
                </View>
                <TextInput placeholder="Nombre" onChangeText={(name) => this.setState({name})} autoCapitalize={"words"} textContentType={'name'} />
                <TextInput placeholder="Apellido Paterno" onChangeText={(first_name) => this.setState({first_name})} autoCapitalize={"words"} textContentType={'givenName'} />
                <TextInput placeholder="Apellido Materno" onChangeText={(last_name) => this.setState({last_name})} autoCapitalize={"words"} textContentType={'middleName'} />
                <Text>Sexo</Text>
                <RNPickerSelect
                    onValueChange={(value) => this.setState({gender: value})}
                    items={[
                        { label: 'Masculino', value: 0 },
                        { label: 'Femenino', value: 1 },]}
                />
                <Text>Fecha de Nacimiento</Text>
                <View>
                <DatePicker
                    date={this.state.birthday} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="seleccionar fecha"
                    format="DD/MM/YYYY"
                    minDate="01/01/1930"
                    maxDate="01/01/2020"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({birthday: date})}}
                />
                </View>
                <TextInput placeholder="Teléfono" onChangeText={(phone) => this.setState({phone})} keyboardType={'phone-pad'} />
                <Button onPress={() => this.siguiente()} title="Siguiente"/>
            </View>
        );
    }
}