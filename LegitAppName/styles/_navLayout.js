import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Nav: {
        width: '100%', 
        height: 60, 
    },
    topContainer: {
        width: '100%', 
        height: 20, 
        backgroundColor: 'blue'
    },
    bottomContainer: {
        width: '100%', 
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'grey'
    },
    button: {
        width: '30%',
        height: 30,
        backgroundColor: 'white',
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