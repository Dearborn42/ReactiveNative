import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Emails from  './Components/email';
import Home from './Components/home';
import Message from './Components/message';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Tab.Screen name="Email" options={{headerShown: false}} component={Emails} />
      <Tab.Screen name="message" options={{headerShown: false}} component={Message} />
    </Tab.Navigator>
  );
}
