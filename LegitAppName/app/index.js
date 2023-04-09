import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import styles from './_loginLayout'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginPage = () => {
    console.log(email, password);
    emailRef.current.clear(), passwordRef.current.clear();
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
