import styles from '../styles/_emailLayout';
import { View } from 'react-native';
import MyDrawer from '../navgiation/sideMenu';


export default function Emails(){
    return (
        <View style={styles.container}>
            <MyDrawer />
        </View>
    )
}