import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import IndexPageClass from './src/pages/IndexPage';
// import LoginPageClass from './src/pages/LoginPage';
import CadastroOcorrenciaPageClass from './src/pages/CadastroOcorrenciaPage';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Perimisão para acessar sua Localização',
        'message': 'Só pegaremos sua Localização quando for para cadastrar ocorrências ' +
                   'Atencionamente PegaPirata'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permissão OK!")
    } else {
      console.log("Permissão NEGADA")
    }
  } catch (err) {
    console.warn(err)
  }
}

const RootStack = createStackNavigator({

  IndexPage: {
    screen: IndexPageClass
  },

  CadastroOcorrenciaPageClass: {
      screen: CadastroOcorrenciaPageClass
  },

  // LoginPageClass:{
  //   screen: LoginPageClass
  // },


},{
    navigationOptions: {
      title: "PegaPirata",
      headerTintColor: "white",
      headerStyle:{
        backgroundColor: "#3498db"
      },
      headerTitleStyle:{
        color: "white",
        fontSize: 25,
      }
    }
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
