import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
    },
    title: {
        paddingVertical: scale(30),
        fontSize: scale(19),
        fontWeight: '700',
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
        marginBottom: scale(15),
    },
    subtitle: {
        paddingVertical: scale(15),
        fontSize: scale(13),
        fontWeight: '500',
        color: '#7a7877',
    },
    card: {
        flexDirection: 'row',
        gap: scale(15),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: scale(15),
        borderTopColor: '#c8c8c8',
        borderTopWidth: 0.4,
    },
    picture: {
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    info: {
        flexDirection: 'column',
        gap: scale(5),
    },
});
