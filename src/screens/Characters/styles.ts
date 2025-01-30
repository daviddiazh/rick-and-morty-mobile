import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        flex: 1,
        height: '100%',
    },
    title: {
        paddingVertical: scale(20),
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

    // Bottom Sheet
    label: {
        color: '#6B7280',
        fontWeight: '400',
        fontSize: scale(13),
        paddingTop: scale(15),
    },
    buttons: {
        flexDirection: 'row',
        gap: scale(10),
        marginVertical: scale(15),
    },
    btnActive: {
        backgroundColor: '#EEE3FF',
        paddingVertical: scale(8),
        borderRadius: scale(8),
        width: '31%',
        alignItems: 'center',
    },
    textBtnActive: {
        color: '#8054C7',
        fontWeight: '500',
        fontSize: scale(12),
    },
    btnInactive: {
        paddingVertical: scale(8),
        borderRadius: scale(8),
        width: '31%',
        alignItems: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 0.5,
    },
    textBtnInactive: {
        color: '#111827',
        fontWeight: '500',
        fontSize: scale(12),
    },
    btnFilterActive: {
        backgroundColor: '#8054C7',
        paddingVertical: scale(7),
        alignItems: 'center',
        borderRadius: scale(10),
    },
    textBtnFilterActive: {
        color: '#fff',
        fontWeight: '400',
        fontSize: scale(13),
    },
    btnFilterInactive: {
        backgroundColor: '#F3F4F6',
        paddingVertical: scale(7),
        alignItems: 'center',
        borderRadius: scale(10),
    },
    textBtnFilterInactive: {
        color: '#6B7280',
        fontWeight: '400',
        fontSize: scale(13),
    },
});
