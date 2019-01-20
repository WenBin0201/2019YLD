import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View, Dimensions, StyleSheet, TextInput, PixelRatio } from 'react-native'
import { COLOR_SECOND_COLOR } from '../../constant/ColorConstant'
import { RED_POINT_DISTANCE, RED_POINT_SIZE } from '../../constant/StaticDataDef'
import PublicStyle from '../../style/PublicStyle'
import Button from '../Button'
import TextWithRedPoint from '../TextWithRedPoint'

const { width, height } = Dimensions.get('window')
const radio = 1.5
const formFontSize = 12
const containerHeight = height * 3 / 4
const containerWidth = width * 2 / 3

export default class CreateCommodityBoxContainer extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    _renderHead = () => {
        return (
            <View style={PublicStyle.view_top}>
                <Text style={PublicStyle.text_FFF_20}>{this.props.title}</Text>
                <TouchableOpacity onPress={() => {
                    if ( this.props.destroy ){
                        this.props.destroy()
                    } else {
                        this.props.navigation.goBack()
                    }
                }} style={PublicStyle.view_top_right}>
                    <Image source={require('../../image/login/shiftRecord-cross.png')}
                           resizeMode={'contain'}
                           style={{ width: 30, height: 30 }}/>
                </TouchableOpacity>
            </View>
        )
    }

    _renderFormLeft = () => {
        return (
            <View style={styles.formPart}>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={[ styles.fieldText ]}>商品条码</TextWithRedPoint>
                    <TextInput
                        style={styles.fieldInputLong}
                        underlineColorAndroid={'transparent'}
                        placeholder={'输入商品条码'}
                    />
                </View>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={styles.fieldText}>商品品名</TextWithRedPoint>
                    <TextInput
                        style={styles.fieldInputLong}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                </View>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={styles.fieldText}>规格</TextWithRedPoint>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>单位</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={styles.fieldText}>供货商</Text>
                    <TextInput
                        style={styles.fieldInputLong}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={styles.fieldText}>商品品牌</Text>
                    <TextInput
                        style={styles.fieldInputLong}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={styles.fieldText}>自编码</Text>
                    <TextInput
                        style={styles.fieldInputLong}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={styles.fieldText}>生产日期</Text>
                    <TextInput
                        style={styles.fieldInputLong}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                </View>
                <View style={{ height: 30 }}/>
            </View>
        )
    }

    _renderFormRight = () => {
        return (
            <View style={styles.formPart}>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={styles.fieldText}>商品分类</TextWithRedPoint>
                    <TextInput
                        style={[ styles.fieldInputLong, { borderRightWidth: 0 } ]}
                        underlineColorAndroid={'transparent'}
                    />
                    <View style={{ width: 13 * radio, height: 20 * radio, backgroundColor: 'gray' }}/>
                </View>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={styles.fieldText}>一级分类</TextWithRedPoint>
                    <TextInput
                        style={[ styles.fieldInputLong, { borderRightWidth: 0 } ]}
                        underlineColorAndroid={'transparent'}
                    />
                    <View style={{ width: 13 * radio, height: 20 * radio, backgroundColor: 'gray' }}/>
                </View>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={styles.fieldText}>二级分类</TextWithRedPoint>
                    <TextInput
                        style={[ styles.fieldInputLong, { borderRightWidth: 0 } ]}
                        underlineColorAndroid={'transparent'}
                    />
                    <View style={{ width: 13 * radio, height: 20 * radio, backgroundColor: 'gray' }}/>
                </View>
                <View style={styles.formFieldContainer}>
                    <TextWithRedPoint style={[ styles.fieldText, { width: 28 * radio } ]}>进价</TextWithRedPoint>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text>元</Text>
                    <TextWithRedPoint containerStyle={{ marginLeft: 5 * radio }}
                                      style={[ styles.fieldText, { width: 23 * radio } ]}>售价</TextWithRedPoint>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text>元</Text>
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>会员价</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text>元</Text>
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>批发价</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text>元</Text>
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>库存</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text style={{ opacity: 0 }}>元</Text>
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>保质期</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text style={{ opacity: 0 }}>元</Text>
                </View>
                <View style={styles.formFieldContainer}>
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>库存{'\n'}上线</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text style={{ opacity: 0 }}>元</Text>
                    <Text style={[ styles.fieldText, { width: 28 * radio } ]}>库存{'\n'}下线</Text>
                    <TextInput
                        style={[ styles.fieldInputLong, { width: 37 * radio } ]}
                        underlineColorAndroid={'transparent'}
                        placeholder={''}
                    />
                    <Text style={{ opacity: 0 }}>元</Text>
                </View>
                <View style={styles.formFieldContainer}>
                    <Button height={30} width={64} backgroundColor={'rgb(241,145,73)'} color={'white'}
                           text={'取消'} borderRadius={5}/>
                    <Button style={{ marginLeft: 40}} height={30 } width={64}
                            backgroundColor={'rgb(235,97,0)'} color={'white'}
                           text={'保存'} borderRadius={5}/>
                </View>
            </View>
        )
    }

    _renderForm = () => {
        return (
            <View style={styles.formContainer}>
                {this._renderFormLeft()}
                {this._renderFormRight()}
            </View>
        )
    }

    render(): React.ReactNode {
        return (
            <View style={{ backgroundColor: '#f1F1f1', width: containerWidth, height: containerHeight }}>
                {this._renderHead()}
                {this._renderForm()}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around'
    },
    formPart: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        height: containerHeight - PublicStyle.view_top.height,
        justifyContent: 'space-around'
    },
    formFieldContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fieldText: {
        width: 35 * radio,
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: COLOR_SECOND_COLOR,
        marginLeft: RED_POINT_SIZE + RED_POINT_DISTANCE
    },
    fieldInputLong: {
        width: 110 * radio,
        height: 20 * radio,
        borderRadius: 4,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: COLOR_SECOND_COLOR,
        fontSize: formFontSize,
        padding: 3,
        marginLeft: 3 * radio
    },



})
