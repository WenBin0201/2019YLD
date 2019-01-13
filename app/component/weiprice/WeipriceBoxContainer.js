import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
    Image

} from 'react-native';

import PublicStyle from '../../style/PublicStyle'
import Button from '../../component/Button'
import WeipriceRightView from './WeipriceRightView'

export default class WeipriceBoxContainer extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={{ width: this.deviceWidth, height: this.deviceHeight - 200, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'flex-end' }}>
                    <View style={WeipriceStyle.WeipriceStyle_left}>
                        <Text style={PublicStyle.text_2B7888_16}>称重计价</Text>
                        <View style={WeipriceStyle.WeipriceStyle_view1}>
                            <Text style={WeipriceStyle.WeipriceStyle_text}>12.35</Text>
                            <Text style={PublicStyle.text_2B7888_14}>Kg</Text>
                        </View>
                        <View style={WeipriceStyle.WeipriceStyle_view1}>
                            <Text style={PublicStyle.text_2B7888_14}>公斤单元(元)</Text>
                            <Text style={WeipriceStyle.WeipriceStyle_text}>32</Text>
                        </View>
                        <View style={WeipriceStyle.WeipriceStyle_view1}>
                            <Text style={PublicStyle.text_2B7888_14}>总计(元)</Text>
                            <Text style={WeipriceStyle.WeipriceStyle_text}>153.52</Text>
                        </View>
                        <View style={WeipriceStyle.WeipriceStyle_view2}>
                            <Button height={30} width={60} text='抹零' />
                            <Button height={30} width={60} backgroundColor='#f19149' text='确定' />
                        </View>
                    </View>
                </View>
                <WeipriceRightView></WeipriceRightView>
            </View>
        )
    }

}
const WeipriceStyle = StyleSheet.create({
    WeipriceStyle_left: {
        backgroundColor: '#FFF',
        width: 200,
        height: 210,
        marginLeft: 2,
        marginRight: 2,
        borderWidth: 1,
        borderColor: "#2b7888",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    WeipriceStyle_view1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        width: 180
    },
    WeipriceStyle_view2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        width: 180,
        justifyContent: 'space-around'

    },
    WeipriceStyle_text:{
        fontWeight:'bold',
        color:'#2b7888',
        fontSize:18
    }
});