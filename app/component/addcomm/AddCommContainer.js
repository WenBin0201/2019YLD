import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView,
    Image

} from 'react-native';


import PublicStyle from '../../style/PublicStyle'
import Button from '../../component/Button'

export default class AddCommContainer extends Component {

    constructor(props) {
        super(props)
        this.isMultiple = this.props.isMultiple
        this.state = {
            dataSource: [
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
            ],
        };
        this.types = ['研究', '包装食品', '饮料饮品', '冷冻冰品', '粮油调料', '生活用品', '生鲜']
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }
    render() {
        return (
            <View style={{ width: this.deviceWidth - 470, height: this.deviceHeight - 220, backgroundColor: '#f1F1f1' }}>
                <View style={[PublicStyle.view_top]}>
                    <Text style={[PublicStyle.text_FFF_20]}>初次售卖商品资料-新增</Text>
                    <TouchableOpacity onPress={() => {
                        if (this.props.destroy) {
                            this.props.destroy();
                        } else {
                            this.props.navigation.goBack()
                        }
                    }} style={[PublicStyle.view_top_right]}>
                        <Image source={require('../../image/login/shiftRecord-cross.png')}
                            resizeMode={'contain'}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={[AddCommStyle.AddCommStyle_view1, { marginTop: 15 }]}>
                    <View style={AddCommStyle.AddCommStyle_view2}>
                        <Text style={PublicStyle.text_2B7888_14}>商品名称</Text>
                    </View>
                    <TextInput style={AddCommStyle.AddCommStyle_input1} />
                    <Button style={{ marginLeft: 15 }} height={33} width={75} backgroundColor={'#e60012'} text={'使用自编码'} />
                </View>
                <View style={AddCommStyle.AddCommStyle_view1}>
                    <View style={AddCommStyle.AddCommStyle_view2}>
                        <Text style={PublicStyle.text_2B7888_14}>商品名称</Text>
                    </View>
                    <TextInput style={AddCommStyle.AddCommStyle_input1} />
                </View>
                <View style={AddCommStyle.AddCommStyle_view1}>
                    <View style={AddCommStyle.AddCommStyle_view3}>
                        <View style={[AddCommStyle.AddCommStyle_view2, { flexDirection: 'row' }]}>
                            <View style={AddCommStyle.AddCommStyle_view5}></View>
                            <Text style={PublicStyle.text_2B7888_14}>售价（元）</Text>
                        </View>
                        <TextInput placeholder='必填' placeholderTextColor='#dbdbdb' style={AddCommStyle.AddCommStyle_input2} />
                    </View>
                    <View style={AddCommStyle.AddCommStyle_view4}>
                        <View style={AddCommStyle.AddCommStyle_view6}>
                            <Text style={PublicStyle.text_2B7888_14}>库存</Text>
                        </View>
                        <TextInput placeholder='必填' placeholderTextColor='#dbdbdb' style={[AddCommStyle.AddCommStyle_input2, { marginLeft: 15 }]} />
                    </View>
                </View>
                <View style={AddCommStyle.AddCommStyle_view1}>
                    <View style={AddCommStyle.AddCommStyle_view3}>
                        <View style={[AddCommStyle.AddCommStyle_view2, { flexDirection: 'row' }]}>
                            <View style={AddCommStyle.AddCommStyle_view5}></View>
                            <Text style={PublicStyle.text_2B7888_14}>进价（元）</Text>
                        </View>
                        <TextInput placeholder='必填' placeholderTextColor='#dbdbdb' style={AddCommStyle.AddCommStyle_input2} />
                    </View>
                    <View style={AddCommStyle.AddCommStyle_view4}>
                        <View style={AddCommStyle.AddCommStyle_view6}>
                            <View style={AddCommStyle.AddCommStyle_view5}></View>
                            <Text style={PublicStyle.text_2B7888_14}>分类</Text>
                        </View>
                        <TouchableOpacity style={AddCommStyle.AddCommStyle_to}>
                            <Text style={AddCommStyle.AddCommStyle_text1}></Text>
                            <Text style={AddCommStyle.AddCommStyle_text2}>▼</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddCommStyle.AddCommStyle_view7}>
                    <View style={{ flex: 1 }}>
                        <Text style={PublicStyle.text_9E9E9E_14}>初次售卖请填写内容</Text>
                        <Text style={PublicStyle.text_E74C39_18}>提示：请输入正确售价</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Button backgroundColor={'#f19149'} width={65} height={35} text={'取消'} />
                        <Button style={{ marginLeft: 15 }} backgroundColor={'#ec6941'} width={65} height={35} text={'确定'} />
                    </View>
                </View>

            </View>
        )
    }
}


const AddCommStyle = StyleSheet.create({
    AddCommStyle_view1: {
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center'
    },
    AddCommStyle_view2: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AddCommStyle_view3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    AddCommStyle_view4: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        justifyContent: 'flex-end'
    },
    AddCommStyle_view5: {
        height: 5,
        width: 5,
        backgroundColor: '#ff0000',
        borderRadius: 5
    },
    AddCommStyle_view6: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    AddCommStyle_view7: {
        height: 40, 
        flexDirection: 'row', 
        marginTop: 10, 
        paddingLeft: 15, 
        paddingRight: 15, 
        alignItems: 'flex-end'
    },
    AddCommStyle_input1: {
        fontSize: 12,
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 4,
        borderColor: '#2b7888',
        borderWidth: 1
    },

    AddCommStyle_input2: {
        fontSize: 12,
        height: 35,
        width: 150,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 4,
        borderColor: '#2b7888',
        borderWidth: 1
    },
    AddCommStyle_to: {
        marginLeft: 15,
        height: 35,
        width: 150,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 4,
        borderColor: '#2b7888',
        borderWidth: 1,
        justifyContent: 'center'
    },
    AddCommStyle_text1:{
        fontSize: 12, 
        color: '#000000', 
        marginLeft: 10 
    },
    AddCommStyle_text2:{
        position: 'absolute', 
        right: 10, 
        fontSize: 12, 
        color: '#000000' 
    }
});