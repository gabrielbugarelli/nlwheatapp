import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },

  avatar: {
    borderRadius: 50,
    borderWidth: 4,
    borderColor: COLORS.BLACK_SECONDARY
  }
})