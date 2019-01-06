import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Detail extends Component {
    componentWillMount(){
        console.log(JSON.stringify(this.props.navigation))
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
 
    }
}