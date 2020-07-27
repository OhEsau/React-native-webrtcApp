import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Estilos} from '../styles/Estilos';

const validarContraseña = (password_1, password_2) => {
    if (password_1 == password_2) {
        return true;
    }
    else return false;
}

export {validarContraseña, };