import {PixelRatio, StyleSheet, Dimensions} from 'react-native'
import {COLOR_GRAY_F3F3F3, COLOR_SECOND_COLOR} from "../constant/ColorConstant";

const {width} = Dimensions.get('window')
const cashierInputBorderColor = COLOR_SECOND_COLOR
const cashierTextSize = 16
const cashierPadding = 15
const listHeadPadding = 5
const listHeadLeftAndRightMargin = 10
const listHeadRedius = 8
const listHeadTextSize = 14
const listHeadTextColor = 'white'
const listItemBorderColor = 'gray'
const listItemPadding = 3
const listItemTextColor = 'black'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_GRAY_F3F3F3
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headTextImage: {
        height: 30
    },
    headRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 0
    },
    headRightDivision: {
        width: 4 / PixelRatio.get(),
        backgroundColor: '#fff',
        height: 61,
        marginRight: 15
    },
    headRightCrossImage: {
        marginRight: 15,
        width: 25,
        height: 25
    },
    cashierContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: cashierPadding,
        paddingBottom: cashierPadding
    },
    cashierAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cashierLeftText: {
        fontSize: cashierTextSize,
        color: COLOR_SECOND_COLOR
    },
    cashierInput: {
        color: COLOR_SECOND_COLOR,
        fontSize: cashierTextSize,
        padding: 0,
        paddingLeft:3,
        paddingRight:3,
        height: 20,
        borderRadius: 4,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: cashierInputBorderColor,
        width: 140,
        marginLeft: 15
    },
    listHeadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width,
        paddingLeft: listHeadLeftAndRightMargin,
        paddingRight: listHeadLeftAndRightMargin,

    },
    listItemSeparatorView: {
        width,
        height: 1 / PixelRatio.get(),
        backgroundColor: listItemBorderColor
    },
    listHeadLeftText: {
        flex: 1,
        textAlign: 'center',
        borderRightWidth: 2 / PixelRatio.get(),
        color: 'white',
        borderTopLeftRadius: listHeadRedius,
        borderBottomLeftRadius: listHeadRedius,
        paddingTop: listHeadPadding,
        paddingBottom: listHeadPadding,
        borderColor: listHeadTextColor,
        fontSize: listHeadTextSize,
        backgroundColor: COLOR_SECOND_COLOR
    },
    listHeadMiddleText: {
        width: width / 3,
        paddingTop: listHeadPadding,
        paddingBottom: listHeadPadding,
        textAlign: 'center',
        color: listHeadTextColor,
        fontSize: listHeadTextSize,
        backgroundColor: COLOR_SECOND_COLOR
    },
    listHeadRightText: {
        flex: 1,
        textAlign: 'center',
        borderLeftWidth: 2 / PixelRatio.get(),
        color: listHeadTextColor,
        borderTopRightRadius: listHeadRedius,
        borderBottomRightRadius: listHeadRedius,
        paddingTop: listHeadPadding,
        paddingBottom: listHeadPadding,
        borderColor: 'white',
        fontSize: listHeadTextSize,
        backgroundColor: COLOR_SECOND_COLOR
    },
    listItemExtraStyle: {
        borderColor: listItemBorderColor,
        backgroundColor: 'white',
        paddingTop: listItemPadding,
        paddingBottom: listItemPadding,
        color: listItemTextColor
    }
})

module.exports = styles
