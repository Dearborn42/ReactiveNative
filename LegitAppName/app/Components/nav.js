import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/_navLayout';

export default function Nav() {
    const navigation = useNavigation();
    const pageSwap = (name) => {
        navigation.replace(name);
    }


  return (
    <View style={styles.Nav}>
      <View style={styles.topContainer}></View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => pageSwap('Home')}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Messages</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Emails</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}