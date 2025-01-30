import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
        flex: 1,
    },
    pictureContainer: {
        position: 'relative',
        width: scale(100),
        height: scale(100),
        marginTop: scale(15),
    },
    picture: {
        borderRadius: 100,
        width: scale(100),
        height: scale(100),
    },
    favoriteIcon: {
        position: 'absolute',
        bottom: 0,
        right: -1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 7,
    },
    name: {
        fontSize: scale(20),
        fontWeight: '700',
        paddingTop: scale(15),
        paddingBottom: scale(10),
    },
    info: {
        paddingVertical: scale(10),
    },
    label: {
        fontSize: scale(14),
        fontWeight: '400',
        color: '#000',
    },
    value: {
        fontSize: scale(13),
        fontWeight: '300',
        color: '#000',
        paddingTop: scale(2.5),
    },
    btn: {
        backgroundColor: '#8054C7',
        paddingVertical: scale(8),
        borderRadius: scale(8),
        width: '100%',
        alignItems: 'center',
        marginTop: scale(10),
    },
    textBtn: {
        color: '#fff',
        fontWeight: '500',
        fontSize: scale(12),
    },
    subtitle: {
        fontSize: scale(13),
        fontWeight: '500',
        color: '#7a7877',
    },

    // Bottom Sheet
    title: {
        color: '#6B7280',
        fontWeight: '400',
        fontSize: scale(13),
        paddingTop: scale(15),
    },
    input: {
        flexDirection: 'row',
        gap: scale(10),
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#F3F4F6',
        borderRadius: scale(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: scale(10),
        paddingHorizontal: scale(10),
        marginVertical: scale(15),
    },
});
