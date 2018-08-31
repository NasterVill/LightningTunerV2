import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Tuner from './src/components/Tuner/Tuner'

export default class App extends Component {
    constructor(props) {
		super(props);
	}

    render() {
        return (
          <View style={styles.container}>
              <Tuner />
          </View>
        );
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
