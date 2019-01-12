import React, { Component } from 'react'
import {
    View,
    Modal
} from 'react-native';
import PublicStyle from '../style/PublicStyle'
export default class BaseBoxView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    render() {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                onRequestClose={() => {
                    if (this.props.destroy) {
                        this.props.destroy();
                    }
                }}
                visible={this.state.visible}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)',justifyContent:'center',alignItems:'center',padding:60 }}>
                        {this.props.renderComponent ? this.props.renderComponent : null}
                </View>
            </Modal>
        )
    }
}