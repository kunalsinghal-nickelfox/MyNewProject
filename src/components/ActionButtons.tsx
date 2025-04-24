import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from './CommonStyles';

export const ActionButtons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <View style={styles.buttonContent}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/343b7761e4c127993fbe3f9f9f3bbddcb8e108f4?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
          <Text style={styles.text}>Grade your coin</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Check Mint Error</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/bb1fe83f99979ff1576d56f002c90e79cd2358f0?placeholderIfAbsent=true',
          }}
          style={styles.errorIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border,
    padding: 20,
    justifyContent: 'center',
  },
  buttonContent: {
    alignItems: 'center',
  },
  icon: {
    width: 56,
    height: 56,
  },
  errorIcon: {
    width: 110,
    height: 100,
  },
  text: {
    fontFamily: fonts.sfProRounded,
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    letterSpacing: -0.5,
    marginTop: 4,
  },
});
