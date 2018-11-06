import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
        <MapView
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,        
            }}
            style={styles.mapView}
          />
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
