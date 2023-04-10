import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import styles from '../../styles/_messagLayout';

export default function Message(){
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        setMessages([...messages, { text, sent: true }]);
        setText('');
    };

  return (
    <View style={styles.container}>
        <FlatList
            style={styles.flatList}
            data={messages}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({ item }) => (
            <Text style={[styles.message, { alignSelf: item.sent ? 'flex-end' : 'flex-start' }]}>
                {item.text}
            </Text>
            )}
        />
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleSend}
            placeholder="Type your message"
            returnKeyType="send"
        />
    </View>
    );
};
