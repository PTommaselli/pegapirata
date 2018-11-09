import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//
import IndexPageClass from './src/pages/IndexPage';
// import InfoOcorrenciaPageClass from './src/pages/InfoOcorrenciaPage';
// import LoginPageClass from './src/pages/LoginPage';

const RootStack = createStackNavigator({
  IndexPage: {
    screen: IndexPageClass
  },

//   CadastroOcorrenciaPageClass:{
//       screen: CadastroOcorrenciaPage
//   },

//   InfoOcorrenciaPageClass:{
//       screen: InfoOcorrenciaPage
//   },

//   LoginPageClass:{
//     screen: LoginPage
//   },


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
