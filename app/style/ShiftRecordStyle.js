import {PixelRatio, StyleSheet} from 'react-native'

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
        right:0
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
    }
});

module.exports = styles;