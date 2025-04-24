import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/23897995694aa164c10bf05fc441cd94e4f33a82?placeholderIfAbsent=true',
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>No Collection Coin</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor...
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ New Coin Set</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1.14,
    resizeMode: 'contain',
    marginTop: 10,
    maxWidth: 333,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 48,
    letterSpacing: -0.5,
    color: '#222',
    fontFamily: 'SF Pro Rounded',
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    opacity: 0.6,
    color: '#222',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'SF Pro Rounded',
  },
  button: {
    width: '100%',
    borderRadius: 50,
    marginTop: 26,
    minHeight: 48,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F6F6F6',
    fontWeight: '400',
    fontFamily: 'SF Pro Rounded',
  },
});
