import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


<<<<<<< HEAD

=======
>>>>>>> 950657e57607d23ae52919526e3180029e8725a1
import IndexPageClass from './src/pages/IndexPage';
// import LoginPageClass from './src/pages/LoginPage';
import CadastroOcorrenciaPageClass from './src/pages/CadastroOcorrenciaPage';

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
