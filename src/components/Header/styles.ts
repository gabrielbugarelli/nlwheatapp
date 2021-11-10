import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 18
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutText: {
    color: COLORS.GRAY_TERTIARY,
    fontSize: 20,
    fontFamily: FONTS.REGULAR,
    fontWeight: 'bold',
    marginRight: 20
  }
})