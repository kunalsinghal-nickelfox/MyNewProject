import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts, colors} from './CommonStyles';

export const IdentifySection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/5eca1339c2b155d9f81f772b64b9aad0126197ee?placeholderIfAbsent=true',
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Identify you coin</Text>
        <Text style={styles.subtitle}>Tap here to recognize a coin</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/678445c320aad05359e95a0eb7f20e77c899f9fe?placeholderIfAbsent=true',
          }}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Identify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 24,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: 104,
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
  },
  image: {
    width: 181,
    aspectRatio: 1.01,
    marginTop: -74,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.sfProRounded,
    fontSize: 32,
    fontWeight: '500',
    color: colors.text.secondary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: fonts.sfProRounded,
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    borderRadius: 32,
    minHeight: 48,
  },
  buttonIcon: {
    width: 16,
    height: 16,
  },
  buttonText: {
    color: colors.text.light,
    fontFamily: fonts.sfProRounded,
    fontWeight: '500',
  },
});
