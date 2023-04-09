import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import LoginScreen from './login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}