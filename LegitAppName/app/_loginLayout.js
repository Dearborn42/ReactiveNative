import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
