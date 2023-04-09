import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Emails from './email';
import Message from './message';
import LoginScreen from './login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Emails" component={Emails}/>
      <Stack.Screen name="Message" component={Message}/>
    </Stack.Navigator>
  );
}
