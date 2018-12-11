import React from 'react';
import { Text, View ,StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Form from '../components/Form';
import Picker from '../components/Picker';

export default class CadastroOcorrenciaPageClass extends React.Component {
  render() {
    return (


      <Form>
        <View style = {styles.container}>

        <Text style={styles.title}>Denúncia</Text>

        <Form >

            <TextInput
                style={styles.textoLoc}
                placeholder= "Localização"
                borderBottomWidth={0}
            />

        </Form>

        <Picker />

        <Form >

            <TextInput
                style={styles.textoDataOcorrencia}
                placeholder= "Data da Ocorrência"
                borderBottomWidth={0}
            />

        </Form>
            <TextInput
                style={styles.textoDescOcorrencia}
                placeholder= "Descrição da Ocorrência"
                multiline={true}
                borderBottomWidth={0}
            />
        <Form>

        </Form>
        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btnFinalizar}
          onPressButton={ () => this.props.navigation.navigate('IndexPage') } >
            <Text style={styles.textBtnFinalizar}>Finalizar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25
  },
  textoLoc: {
    paddingBottom: 18,
    backgroundColor: 'white',
    color: '#636e72',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  textoDataOcorrencia:{
    paddingBottom: 18,
    backgroundColor: 'white',
    color: '#636e72',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5
  },
  textoDescOcorrencia:{
    paddingBottom: 90,
    backgroundColor: 'white',
    color: '#636e72',
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    height: 130
  },
  areaBtn:{
    justifyContent: "center",
    alignItems: "center"
  },
  btnFinalizar: {
    backgroundColor: "#3498db",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtnFinalizar:{
    color: "white",
    fontSize: 20,
    borderRadius: 5
  },
});
