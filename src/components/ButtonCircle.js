import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

const ButtonCircleComponent = ({_onPressButton}) =>{
  return(
    <TouchableOpacity style={ styles.button} onPress={this._onPressButton}>
    <Icon
      name='add'
      color='white'
    />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    width: 30,
    height: 30,
    backgroundColor: 'blue'
  }
});
