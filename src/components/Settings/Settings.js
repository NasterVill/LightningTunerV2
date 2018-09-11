import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Settings extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text>Tuning</Text>
                    <Text>Standard</Text>
                </TouchableOpacity>
            </View>
        );
    }
}