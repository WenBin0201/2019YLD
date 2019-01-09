/**
 * 交接班记录
 * */

import React from 'react'
import commonStyle from "../../style/CommonStyle";
import {Image, View, PixelRatio, TouchableOpacity} from "react-native";
import styles from '../../style/ShiftRecordStyle'

class ShiftRecord extends React.Component {
    render(): React.ReactNode {
        return (
            <View>
                <View
                    style={[commonStyle.logoFrame, styles.headContainer]}>
                    <Image source={require("../../image/login/shiftRecord-text.png")} style={styles.headTextImage}
                           resizeMode={'contain'}/>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.pop()
                        }}
                        style={[styles.headRightContainer]}>
                        <View style={styles.headRightDivision}/>
                        <Image source={require("../../image/login/shiftRecord-cross.png")}
                               resizeMode={'contain'}
                               style={styles.headRightCrossImage}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default ShiftRecord