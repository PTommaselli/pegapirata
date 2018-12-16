import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import CadastroOcorrenciaPageClass from '../pages/CadastroOcorrenciaPage';

class GoCadastroButton extends React.Component{

  render(){
    return (
      <Button title="Ocorrencia" onPress={() => this.props.navigation.navigate('CadastroOcorrenciaPageClass')}/>
    )
  }
};

export default withNavigation(GoCadastroButton);
