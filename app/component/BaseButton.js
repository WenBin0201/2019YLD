import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    TouchableOpacity
} from 'react-native'

import { COLOR_SECOND_COLOR, COLOR_WHITE_COLOR, COLOR_F1F1F1 } from '../constant/ColorConstant'

/**
 * 按鈕
 */
export default class BaseButton extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        fontSize: PropTypes.number,
        paddingLeft: PropTypes.number,
        paddingRight: PropTypes.number,
        marginRight: PropTypes.number,
        onPress: PropTypes.func,
        style: PropTypes.object
    }

    static defaultProps = {
        backgroundColor: COLOR_SECOND_COLOR,
        borderRadius: 6,
        color: COLOR_WHITE_COLOR,
        fontSize: 18,
        disabled: false,
        paddingLeft:17,
        paddingRight:17,
        marginRight:8,
        height:39
    }

    constructor(props) {
        super(props)

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                style={[ {
                    height: this.props.height,
                    backgroundColor: this.props.disabled ? COLOR_F1F1F1 : this.props.backgroundColor,
                    borderRadius: this.props.borderRadius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft:this.props.paddingLeft,
                    paddingRight:this.props.paddingRight,
                    marginRight:this.props.marginRight,
                }, this.props.style ]}
                onPress={() => {
                    if ( this.props.onPress ){
                        this.props.onPress()
                    }
                }}
            >
                <Text style={{
                    fontSize: this.props.fontSize,
                    color: this.props.color
                }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity> )
    }
}
