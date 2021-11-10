import { StyleSheet } from "react-native";
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: "11%"
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.GRAY_TERTIARY
  }
})