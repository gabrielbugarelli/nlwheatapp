import React from 'react'
import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from "./styles";

export const MessageList = () => {

  const message = {
    id: '1',
    text: 'Desenvolvedor frontend',
    user: {
      name: 'Gabriel Fonseca',
      avatar_url: 'https://avatars.githubusercontent.com/u/47955200?v=4'
    }
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  )
}