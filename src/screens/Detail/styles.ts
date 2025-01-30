import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
    },
    picture: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginTop: scale(25),
    },
    name: {
        fontSize: scale(20),
        fontWeight: '700',
        paddingTop: scale(15),
        paddingBottom: scale(20),
    },
    info: {
        paddingVertical: scale(15),
    },
    label: {
        fontSize: scale(15),
        fontWeight: '400',
        color: '#000',
    },
    value: {
        fontSize: scale(14),
        fontWeight: '300',
        color: '#000',
        paddingTop: scale(3),
    },
});
