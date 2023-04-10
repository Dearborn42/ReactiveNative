import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Emails from  './Components/email';
import Home from './Components/home';
import Message from './Components/message';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name=" " 
        options={{
          headerShown: false,         
          tabBarIcon: () => (<Ionicons name="home" color={'#185708'} size={30} />)
        }} 
        component={Home}
      />
      <Tab.Screen 
        name="  " 
        options={
          {headerShown: false, 
          tabBarIcon: () => (<Ionicons name="mail-sharp" size={35} color='#185708' />)
        }} 
        component={Emails} />
      <Tab.Screen 
        name="   " 
        options={
          {headerShown: false,
            tabBarIcon: () => (<Entypo name="message" size={35} color="#185708" />)
        }} 
        component={Message} />
    </Tab.Navigator>
  );
}
