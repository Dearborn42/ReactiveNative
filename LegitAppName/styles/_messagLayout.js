import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#185708'
  },
  flatList: {
    width: '90%', 
    height: '50%',
    borderWidth: 2, 
    borderColor: 'black', 
    borderStyle: 'solid', 
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#4f4f4f',
    borderRadius: 10
  },
  message: {
    padding: 8,
    marginBottom: 2,
    marginRight: 7,
    fontSize: 18,
    backgroundColor: '#8eff01'
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default styles;