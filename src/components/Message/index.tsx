import React from 'react';
import { Text, View  } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export const Message = () => {
  return (
    <View>
      <Text style={styles.message}>
        Texto da mensagem
      </Text>

      <View>
        <UserPhoto
          imageUri=''
          sizes='SMALL'
        />

        <Text style={styles.userName}>
          Nome do usuário
        </Text>
      </View>
    </View>
  )
}