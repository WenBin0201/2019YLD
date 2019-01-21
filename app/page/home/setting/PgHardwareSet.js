import React, { Component } from 'react'
import { Text, View, Picker, PixelRatio, TextInput } from 'react-native'
import Button from '../../../component/Button'
import CustomSwitch from '../../../component/CustomSwitch'
import { COLOR_E74C39, COLOR_F19149 } from '../../../constant/ColorConstant'
import { WIDTH_RATIO } from '../../../constant/StaticDataDef'
import styles from '../../../style/PgHardwareSetStyle'

/**
 * 硬件设置
 */
export default class PgHardwareSet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switch1: true,
            switch2: false,
            switch3: false,
            selectedNum: 1
        }
    }

    render() {
        const { switch1, switch2, switch3, selectedNum } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.headText}>硬件设置</Text>
                    <View style={styles.colContainer}>
                        <Text style={styles.leftText}>小票打印机设置</Text>
                        <View style={styles.rightButtonContainer}>
                            <Button
                                text={'驱动监测'}
                                width={72 * WIDTH_RATIO}
                                height={30 * WIDTH_RATIO}
                                backgroundColor={COLOR_F19149}
                                fontSize={20}
                                borderRadius={6}/>
                            <Button
                                text={'打印测试页'}
                                width={96 * WIDTH_RATIO}
                                height={30 * WIDTH_RATIO}
                                backgroundColor={COLOR_E74C39}
                                style={{ marginLeft: 10 * WIDTH_RATIO }}
                                fontSize={20}
                                borderRadius={6}/>
                        </View>
                    </View>

                    <View style={styles.colContainer}>
                        <Text style={styles.leftText}>小票打印机默认项</Text>
                        <View style={{ width: 96 * WIDTH_RATIO, height: 30 * WIDTH_RATIO }}>
                            <CustomSwitch
                                value={switch1}
                                onChangeValue={value => this.setState({ switch1: value })}/>
                        </View>
                    </View>

                    <View style={styles.colContainer}>
                        <Text style={styles.leftText}>启用钱箱</Text>
                        <View style={{ width: 96 * WIDTH_RATIO, height: 30 * WIDTH_RATIO }}>
                            <CustomSwitch
                                value={switch2}
                                onChangeValue={value => this.setState({ switch2: value })}/>
                        </View>
                    </View>

                    <View style={styles.colContainer}>
                        <Text style={styles.leftText}>销售小票打印数量</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={[ styles.fieldInputLong, { borderRightWidth: 0 } ]}
                                underlineColorAndroid={'transparent'}
                            />
                            <View
                                style={{ width: 16 * WIDTH_RATIO, height: 30 * WIDTH_RATIO, backgroundColor: 'gray' }}/>
                        </View>
                    </View>

                    <View style={styles.colContainer}>
                        <Text style={styles.leftText}>启用钱箱密码</Text>
                        <View style={{ width: 96 * WIDTH_RATIO, height: 30 * WIDTH_RATIO }}>
                            <CustomSwitch
                                value={switch3}
                                onChangeValue={value => this.setState({ switch3: value })}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
