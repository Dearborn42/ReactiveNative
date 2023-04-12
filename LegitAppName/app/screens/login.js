import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, Image, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/_loginLayout'
import myImage from '../.././logo.png';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginPage = () => {
  if(email == 'TestEmail' && password == 'TestPassword') {
      emailRef.current.clear(), passwordRef.current.clear();
      navigation.replace('MyTabs');
  }else{
      console.log('Wrong password or email');
  }
}
  const handleReturn = () => {
    Keyboard.dismiss();
  };
  
  return (
    <View style={styles.container}>
      <Image source={myImage}></Image>
      <TextInput
        ref={emailRef}
        style={{...styles.box, marginTop: 20}}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={text => setEmail(text)}
        onSubmitEditing={handleReturn}
      />
      <TextInput
        ref={passwordRef}
        style={styles.box}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        onSubmitEditing={handleReturn}
      />
      <TouchableOpacity 
        onPress={loginPage} 
        style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}