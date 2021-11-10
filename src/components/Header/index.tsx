import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { UserPhoto } from "../UserPhoto";
import LogoSvg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto 
          imageUri='https://avatars.githubusercontent.com/u/47955200?v=4'
          sizes="NORMAL"
        />
      </View>
    </View>
  )
}