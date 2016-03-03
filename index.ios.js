/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var GeolocationExample = require('./GeolocationExample');
var MapViewExample = require('./MapViewExample');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var GeolocDemo = React.createClass({
  render: function() {
    return (
      // <View style={styles.container}>
        <MapViewExample />
      // </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('GeolocDemo', () => GeolocDemo);
