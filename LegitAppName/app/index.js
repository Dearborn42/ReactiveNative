import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login';
import MyTabs from './navgiation/nav';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
      <Stack.Screen name="MyTabs" options={{headerShown: false}} component={MyTabs}/>
    </Stack.Navigator>
  );
}
