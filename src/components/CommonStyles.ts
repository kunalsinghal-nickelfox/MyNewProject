import {StyleSheet} from 'react-native';

export const fonts = {
  sfProText: 'SF Pro Text',
  sfProRounded: 'SF Pro Rounded',
};

export const colors = {
  primary: '#3B6748',
  secondary: '#E6F2E9',
  text: {
    primary: '#222222',
    secondary: '#3F3D3B',
    light: '#F6F6F6',
  },
  border: '#C3C3C3',
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontFamily: fonts.sfProRounded,
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: -0.5,
    color: colors.text.primary,
  },
  subheading: {
    fontFamily: fonts.sfProRounded,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: -0.5,
    color: colors.text.primary,
  },
  body: {
    fontFamily: fonts.sfProRounded,
    fontSize: 16,
    fontWeight: '400',
    color: colors.text.secondary,
  },
  smallText: {
    fontFamily: fonts.sfProRounded,
    fontSize: 12,
    fontWeight: '400',
    color: colors.text.secondary,
  },
});
