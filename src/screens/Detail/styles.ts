import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
    },
    pictureContainer: {
        position: 'relative', // Asegura que los hijos absolutos se posicionen dentro de este contenedor
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
