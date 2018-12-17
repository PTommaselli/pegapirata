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
      places:[]
    }
  }

  async fetchMovies () {
    try {
      let moviesResponse = await fetch('http://192.168.25.21:3000/');
      console.log(moviesResponse);
      let moviesResponseJson = await moviesResponse.json();
      return moviesResponseJson;
    }catch (error) {
      console.log(error);
    }
  }
  async componentDidMount () {
    let moviesResponseJson = await this.fetchMovies();
    console.log(moviesResponseJson);
    this.setState({places: moviesResponseJson});
    return;
  }

  renderMaker(place){
    console.log(place);
    switch (place.tipo_registro) {
      case 'Roubo':
        return <MapView.Marker
        key={place.id_registro}
        image={require('../../assets/Marker_Roubo.png')}
        title={place.nome_registro}
        description={place.desc_registr}
        coordinate={{
          latitude: Number(place.latitude),
          longitude: Number(place.longitude)
        }}
        />
      break;
      case 'Assassinato':
        return <MapView.Marker
        key={place.id_registro}
        image={require('../../assets/Marker_Assassinato.png')}
        title={place.nome_registro}
        description={place.desc_registro}
        coordinate={{
          latitude: Number(place.latitude),
          longitude: Number(place.longitude)
        }}
        />
      break;
      default:
        return <MapView.Marker
        key={place.id_registro}
        title={place.nome_registro }
        description={place.desc_registro}
        coordinate={{
          latitude: Number(place.latitude),
          longitude: Number(place.longitude)
        }}
        />
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
              zoomEnabled={true}
              region={{
                latitude: -22.21664883,
                longitude: -54.81285095,
                // latitudeDelta: 0.0922,
                // longitudeDelta: 0.0421,
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.mapView}
              rotateEnabled={ false }
              zoomEnabled={ false }
              showsPointsOfInterest={ false }
              showBuildings={ false }
          >
          { this.state.places.map(this.renderMaker.bind(this)) }

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
