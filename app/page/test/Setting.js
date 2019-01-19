import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Setting extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.push('Detail')}
                />
            </View>
        );
    }
}