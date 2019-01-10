import { PixelRatio, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const cashierInputBorderColor = 'black'
const itemBorderColor = 'black'

const styles = StyleSheet.create({
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
        justifyContent: 'space-around'
    },
    cashierAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cashierLeftText: {
        fontSize: 42
    },
    cashierInput: {
        fontSize: 42,
        underlineColorAndroid: 'transparent',
        padding: 0,
        borderRadius: 4,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: cashierInputBorderColor,
        width: 200
    },
    listHeadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width,
        backgroundColor: 'black'
    },
    listItemSeparatorView: {
        width,
        height: 1 / PixelRatio.get(),
        backgroundColor: itemBorderColor
    },
    listHeadLeftText: {
        flex: 1,
        textAlign: 'center',
        borderRightWidth: 2 / PixelRatio.get()
    },
    listHeadBorderColor: {
        borderColor: 'black'
    },
    listItemBorderColor: {
        borderColor: itemBorderColor
    }
})

module.exports = styles
