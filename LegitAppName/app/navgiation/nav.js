import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Emails from  '../screens/email';
import Home from '../screens/home';
import Message from '../screens/message'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        options={{         
          tabBarIcon: () => (<Ionicons name="home" color={'#185708'} size={30} />)
        }} 
        component={Home}
      />
      <Tab.Screen 
        name="Mail" 
        options={
          {headerShown: false, 
          tabBarIcon: () => (<Ionicons name="mail-sharp" size={35} color='#185708' />)
        }} 
        component={Emails} />
      <Tab.Screen 
        name="Messages" 
        options={{
            tabBarIcon: () => (<Entypo name="message" size={35} color="#185708" />)
        }} 
        component={Message} />
    </Tab.Navigator>
  );
}
