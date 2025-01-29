import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
    },
    title: {
        paddingTop: scale(35),
        paddingBottom: scale(15),
        fontSize: scale(19),
        fontWeight: '600',
    },
    subtitle: {
        paddingVertical: scale(15),
        fontSize: scale(13),
        fontWeight: '500',
        color: '#7a7877',
    },
    card: {
        flexDirection: 'row',
        gap: 15,
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
        gap: 5,
    },
});
