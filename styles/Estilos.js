import {StyleSheet} from 'react-native';

export const Estilos = StyleSheet.create ({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registro : {
        borderBottomWidth : 1,
        borderBottomColor : 'black',  
        width: '80%',
      },
    profilePicture : {
        width: '50%',
        height: '25%',
    },
    botones : {
        flexDirection: 'row',
    }
})

export const estilosLista = StyleSheet.create({
    contenedor: {
      flex: 1,
      padding: 20,
    },
    
    item: {
        flexDirection: 'row',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 0
    },
    
    titulo: {
        fontSize: 32,
    },
    
    thumbnail: {
        width: 50,
        height: 50,
    },
  });
  
  export const estiloCamara = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
    },    
    camara : {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    boton : {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    barraSuperior :{
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
  });