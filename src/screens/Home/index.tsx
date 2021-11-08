import React from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"

export const Home = () => {
  return (
    <View style={ styles.container }>
      <Text style={styles.text}> Página Home  </Text>
    </View>
  )
}