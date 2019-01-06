import React, { Component } from 'react'
import {
    View,
    Modal
} from 'react-native';

export default class BaseBoxView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true
        }
    }

    render() {
        return (
            <Modal
                animationType='none'
                transparent={true}
                onRequestClose={() => {
                    this.setState({ modalVisible: false })
                }}
                visible={this.state.modalVisible}>
                <View style={{flex:1,backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                    {this.renderComponent()}
                </View>
            </Modal>
        )
    }

    _closeBox(){
        this.setState({ modalVisible: false })
    }
    /**
     * 渲染子组件
     */
    renderComponent(){}
}