import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

 import GoCadastroButton from '../components/GoCadastro';

export default class IndexPageClass extends React.Component {
  constructor(props){
    super(props)
    this.state={
      latitude: -22.223556,
      longitude: -54.812512,

      places:[
        {
          id: 1,
          title: 'Furto', //corelacionar tipo de Ocorrencia
          description: 'estava andando e passou um cara e...', //corelacionar a descricao da Ocorrencia
          latitude:-22.215718, //corelacionar a latitude
          longitude:  -54.822197//corelacionar a longitude
        },
        {
          id: 2,
          title: 'Roubo', //corelacionar tipo de Ocorrencia
          description: 'estava andando e passou um cara e...', //corelacionar a descricao da Ocorrencia
          latitude: -22.214645,//corelacionar a latitude
          longitude: -54.796406//corelacionar a longitude
        },
        {
          id: 3,
          title: 'Assedio', //corelacionar tipo de Ocorrencia
          description: 'estava andando e passou um cara e...', //corelacionar a descricao da Ocorrencia
          latitude: -22.225451, //corelacionar a latitude
          longitude:  -54.798250//corelacionar a longitude
        },
        {
          id: 4,
          title: 'Tiroteio', //corelacionar tipo de Ocorrencia
          description: 'estava andando e passou uns caras e...', //corelacionar a descricao da Ocorrencia
          latitude: -22.209957, //corelacionar a latitude
          longitude: -54.802672//corelacionar a longitude
        }
      ]
    }
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <GoCadastroButton/>
      ),
    };
  };
  render() {
    const { latitude, longitude } = this.state;
    return (
          <MapView
              region={{
<<<<<<< HEAD
                latitude: -22.21664883,
                longitude: -54.81285095,
                // latitudeDelta: 0.0922,
                // longitudeDelta: 0.0421,
=======
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
>>>>>>> 950657e57607d23ae52919526e3180029e8725a1
              }}
              style={styles.mapView}
              rotateEnabled={ false }
              zoomEnabled={ false }
              showsPointsOfInterest={ false }
              showBuildings={ false }
          >
          { this.state.places.map(place => (
            <MapView.Marker
              key={place.id}
              title={place.title}
              description={place.description}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude
              }}
            />
          ))}


          </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
