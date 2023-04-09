import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/_loginLayout'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginPage = () => {
  if(email == 'TestEmail' && password == 'TestPassword') {
      emailRef.current.clear(), passwordRef.current.clear();
      navigation.replace('Home');
  }else{
      console.log('Wrong password or email');
  }
}
  
  return (
    <View style={styles.container}>
      <TextInput
        ref={emailRef}
        style={{...styles.box, marginBottom: 20, marginTop: 20}}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        ref={passwordRef}
        style={{...styles.box, marginBottom: 20}}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity 
        onPress={loginPage} 
        style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}