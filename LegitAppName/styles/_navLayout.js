import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Nav: {
        width: '100%', 
        height: 60, 
    },
    topContainer: {
        width: '100%', 
        height: 20, 
        backgroundColor: '#185708'
    },
    bottomContainer: {
        width: '100%', 
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#378914'
    },
    button: {
        width: '30%',
        height: 30,
        backgroundColor: '#8c8c8c',
        borderRadius: 5,
        marginBottom: 'auto',
        marginTop: 'auto'
    }, 
    buttonText: {
        textAlign: 'center',
        marginBottom: 'auto',
        marginTop: 'auto'
    }
})

export default styles