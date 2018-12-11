import React, {Component} from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

export default class ButtonCircleComponent extends Component {

   render() {
     return (
       <View style={styles.container}>
         <TouchableOpacity
           style={styles.button}
           onPress={this.onPress}
         >
         <Icon
            name='add'
            color= 'white'/>
         </TouchableOpacity>
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  button:{
    width: 60,
    height: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
    position: "absolute"
  }
});
