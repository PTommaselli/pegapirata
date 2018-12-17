import React from 'react';
import { Text, View ,StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import MapView from 'react-native-maps';

import Form from '../components/Form';
import Picker from '../components/Picker';

export default class CadastroOcorrenciaPageClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // INFORS DE CADASTRO
      nome_registro: undefined,
      tipo_registro: new Picker().state.value,
      data_registro: "now()",
      dataOcorrencia_registro: undefined,
      documento_registro: undefined,
      latitude: null,
      longitude: null,
      Usuarios_id_usuario: 1
    }
  }
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (


      <Form>
        <View style = {styles.container}>

          <Text style={styles.title}>Denúncia</Text>


          <Picker />

            <Form >
                <TextInput
                    style={styles.textoLoc}
                    placeholder= "Nome Ocorrência"
                    borderBottomWidth={0}
                    onChangeText = {(value) => {
                      this.setState({nome_registro: value})
                    }}
                />

            </Form>


            <Form>
                <TextInput
                    style={styles.textoDescOcorrencia}
                    placeholder= "Descrição da Ocorrência"
                    multiline={true}
                    borderBottomWidth={0}
                    onChangeText = {(value) => {
                      this.setState({desc_registro: value})
                    }}
                />
            </Form>

            <Form >
                <TextInput
                    style={styles.textoDataOcorrencia}
                    placeholder= "Data da Ocorrência"
                    borderBottomWidth={0}
                    onChangeText = {(value) => {
                      this.setState({dataOcorrencia_registro: value})
                    }}
                />
            </Form>

            <View style={styles.containerLocation}>
              <Text style={styles.location}>Localização Atual</Text>
              <Text style={styles.getLoca}>Latitude: {this.state.latitude}</Text>
              <Text style={styles.getLoca}>Longitude: {this.state.longitude}</Text>
            </View>

            <View style={styles.areaBtn}>
              <TouchableOpacity style={styles.btnFinalizar}
              onPress={() => {
                this._tryValues();
              }}>
                <Text style={styles.textBtnFinalizar}>Finalizar</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Form>
    );
  }
  async cadastroOcorrencia () {
    console.log(this.state);
    try {
      let moviesResponse = await fetch('http://192.168.25.21:3000/cadastroRegistro', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome_registro: this.state.nome_registro,
          tipo_registro: this.state.tipo_registro,
          dataOcorrencia_registro: this.state.dataOcorrencia_registro,
          documento_registro: this.state.documento_registro,
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          Usuarios_id_usuario: this.state.Usuarios_id_usuario,
          desc_registro: this.state.desc_registro,
        }),
      })
      .catch(error => {
        console.error(error);
      });
      let moviesResponseJson = await moviesResponse.json();
      return moviesResponseJson;
    }catch (error) {
      console.log(error);
    }
  }
  _tryValues(){
    try {
      if (this.state.nome_registro == undefined) throw 'sem nome do registro'
      // if (this.state.tipo_registro == undefined) throw 'sem tipo'
      if (this.state.dataOcorrencia_registro == undefined) throw 'sem data'
      if (this.state.desc_registro == undefined) throw 'sem descrição'
      // if (this.state.documento_registro == undefined) throw 'sem documento'

      this.cadastroOcorrencia();
    } catch (error) {
      Alert.alert('Campos Vazios! \n Preencha todos corretamente.');
      console.log(error);
    }
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
  getLoca: {
    textAlign: "left",
    fontSize: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  location:{
    textAlign: "center",
    fontSize: 15,
  },
  containerLocation: {
    backgroundColor: "#bdc3c7",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    paddingVertical: 5,
    marginBottom: 10
  }
});
