import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TuningScreen from './src/screens/TuningScreen'

export default class App extends Component {
    constructor(props) {
		super(props);
	}

    render() {
        return <View/>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});
