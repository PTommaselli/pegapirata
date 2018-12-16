import React from 'react';
import { Text, View ,StyleSheet, ScrollView, TextInput, Button} from 'react-native';


export default class InfoOcorrenciaPageClass extends React.Component {

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={ styles.tipoOcorrencia }>Tipo da Ocorrência</Text>
        </View>
        <View style={ styles.container1}>
          <Text style={ styles.dataOcorrencia} >Data da Ocorrência:</Text>
          <Text style={styles.TextInput}>23/04/2018</Text>
        </View>
        <View>
          <Text style={ styles.descOcorrencia} >Descrição da Ocorrência:</Text>
          <Text style={styles.TextInput}></Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tipoOcorrencia:{
    textAlign: 'center',
    fontSize: 34,
    marginBottom: 20
  },
  dataOcorrencia:{
    textAlign: "center",
    marginBottom: 10
  },
  descOcorrencia:{
    textAlign: "center",
    marginTop: 10
  },
  TextInput:{
    textAlign: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});
