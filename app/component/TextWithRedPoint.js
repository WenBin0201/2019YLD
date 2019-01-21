import React from 'react'import PropTypes from 'prop-types'import { Text, View, StyleSheet } from 'react-native'import { RED_POINT_DISTANCE, RED_POINT_SIZE } from '../constant/StaticDataDef'export default class TextWithRedPoint extends React.Component {    static propTypes = {        pointStyle: PropTypes.object    }    static defaultProps = {        pointStyle: {}    }    render(): React.ReactNode {        return (            <View style={[ styles.redPointContainer, { ...this.props.containerStyle } ]}>                <View style={[ styles.redPoint, this.props.pointStyle ]}/>                <Text {...this.props} style={[ this.props.style, { marginLeft: 0 } ]}>                    {this.props.children}                </Text>            </View>        )    }}const styles = StyleSheet.create({    redPointContainer: {        flexDirection: 'row',        alignItems: 'center'    },    redPoint: {        width: RED_POINT_SIZE,        height: RED_POINT_SIZE,        borderRadius: RED_POINT_SIZE,        backgroundColor: 'red',        marginRight: RED_POINT_DISTANCE    }})