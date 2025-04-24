import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from './CommonStyles';

export const Header = () => {
  return (
    <View>
      <Text style={styles.time}>9:41</Text>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.logo} />
          <Text style={styles.title}>CoinApp</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/0604e4cd7869a275baab82e8549417f8de0329a4?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/6c4fbb2cdc1fb0c0b656852d79d417b95b4f11e5?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/0cd207ea5d3b232d12ebbea2f6af2e8925d96db7?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    fontFamily: fonts.sfProText,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 33,
    color: '#000',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 9,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    fontFamily: fonts.sfProRounded,
    fontSize: 24,
    color: colors.primary,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 136,
    justifyContent: 'space-between',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
