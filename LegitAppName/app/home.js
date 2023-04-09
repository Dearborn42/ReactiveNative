import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/_homeLayout';
import Nav from './Components/nav';

export default function Home() {
  return (
    <View>
      <Nav />
    </View>
  );
}