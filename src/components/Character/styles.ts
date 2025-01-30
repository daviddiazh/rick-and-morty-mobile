import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
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
