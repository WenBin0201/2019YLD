import { StyleSheet, PixelRatio, Dimensions } from 'react-native'
import { COLOR_DCDCDC } from '../constant/ColorConstant'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    headContainer: {
        flexDirection: 'row',
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: 'black',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get()
    },
    listItemContainer: {
        marginTop: 0
    },
    bottomContentContainer: {
        padding: 5,
        backgroundColor: COLOR_DCDCDC,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    codeInput: {
        height:30,
        fontSize: 12,
        padding: 4,
        textAlignVertical: 'center',
        borderRadius: 5,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: 'rgb(43,120,137)',
        backgroundColor: 'white'
    },
    bottomLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomRightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttons: {
        padding: 4,
        marginLeft: 4
    }
})

export default styles
