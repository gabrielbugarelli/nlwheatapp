import React from 'react'
import { View } from 'react-native';
import { Message } from '../Message';

import { styles } from "./styles";

export const MessageList = () => {
  return (
    <View style={styles.container}>
      <Message />
    </View>
  )
}