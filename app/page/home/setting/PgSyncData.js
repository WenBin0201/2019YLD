import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../../../component/Button'
import TextWithRedPoint from '../../../component/TextWithRedPoint'
import { COLOR_E74C39, COLOR_EC6941, COLOR_SECOND_COLOR } from '../../../constant/ColorConstant'
import { WIDTH_RATIO } from '../../../constant/StaticDataDef'
import styles from '../../../style/PgSyncDataStle'

/**
 * 同步数据
 */
export default class PgSyncData extends Component {

    _renderDownloadSettingsData = () => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={require('../../../image/ic_download.png')}
                    style={styles.leftIcon}
                    resizeMode={'contain'}
                />
                <View style={styles.rightContainer}>
                    <Button
                        text={'下载设置数据'}
                        width={243 * WIDTH_RATIO}
                        height={54 * WIDTH_RATIO}
                        fontSize={30}
                        backgroundColor={COLOR_EC6941}/>
                    <Text style={styles.text}>上次更新于2018-12-21 21:11:41</Text>
                    <TextWithRedPoint
                        style={styles.text}
                        pointStyle={{ backgroundColor: COLOR_SECOND_COLOR }}>将您在【盈立多公众号】中添加或修改过的最新设置信息更新到这台设备；</TextWithRedPoint>
                    <TextWithRedPoint
                        style={styles.text}
                        pointStyle={{ backgroundColor: COLOR_SECOND_COLOR }}>将【盈立多云端】更新的商品信息及系统版本变更信息更新到这台设备；</TextWithRedPoint>
                    <TextWithRedPoint
                        style={styles.text}
                        pointStyle={{ backgroundColor: COLOR_SECOND_COLOR }}>设备联网时，每次启动时系统会自动更新；</TextWithRedPoint>
                </View>
            </View>
        )
    }

    _renderUploadSettingsData = () => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={require('../../../image/ic_upload.png')}
                    style={styles.leftIcon}
                    resizeMode={'contain'}
                />
                <View style={styles.rightContainer}>
                    <Button
                        text={'上传数据'}
                        width={243 * WIDTH_RATIO}
                        height={54 * WIDTH_RATIO}
                        fontSize={30}
                        backgroundColor={COLOR_E74C39}/>
                    <Text style={styles.text}>上次上传于2018-12-21 21:11:41</Text>
                    <TextWithRedPoint
                        style={styles.text}
                        pointStyle={{ backgroundColor: COLOR_SECOND_COLOR }}>将您在这台设备上修改过的商品信息上传至【盈立多云端】；</TextWithRedPoint>
                    <TextWithRedPoint
                        style={styles.text}
                        pointStyle={{ backgroundColor: COLOR_SECOND_COLOR }}>将您在这台设备上的收银记录\入库记录\采购记录上传至【盈立多云端】；</TextWithRedPoint>
                    <TextWithRedPoint
                        style={styles.text}
                        pointStyle={{ backgroundColor: COLOR_SECOND_COLOR }}>设备联网时，系统会按照系统配置定时上传相关数据；</TextWithRedPoint>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderDownloadSettingsData()}
                {this._renderUploadSettingsData()}
            </View>
        )
    }
}
