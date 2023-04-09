import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#185708'
  },
  box: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#8eff01'
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  Image: {
    width: '60%',
    height: '60%',
  }
});

export default styles;
