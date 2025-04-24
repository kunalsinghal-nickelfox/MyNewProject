import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts} from './CommonStyles';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/93b014381acf4d1ec8eb5964cffb8d10adfd9a10?placeholderIfAbsent=true',
        }}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.navGroup}>
          <View style={styles.navItem}>
            <View style={styles.homeIcon} />
            <Text style={styles.navText}>Home</Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/a343000cb6b2e5728213f4d44b7f4ff4a7f4dad1?placeholderIfAbsent=true',
              }}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Collection</Text>
          </View>
        </View>
        <View style={styles.centerButton}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/37c1af3c8ac361e9b39442bb5659231a98ec2276?placeholderIfAbsent=true',
            }}
            style={styles.centerIcon}
          />
        </View>
        <View style={styles.navGroup}>
          <View style={styles.navItem}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/78680bd502988bd611f32d5665ce10a2d4d30cce?placeholderIfAbsent=true',
              }}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Explore</Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/671c424352f7f63bbff179f850875ac76a296fb3?placeholderIfAbsent=true',
              }}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Setting</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  navGroup: {
    flexDirection: 'row',
    gap: 4,
  },
  navItem: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  homeIcon: {
    width: 24,
    height: 24,
    borderRadius: 240,
    backgroundColor: '#6D6D6D',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    marginTop: 8,
    fontFamily: fonts.sfProRounded,
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
  },
  centerButton: {
    width: 54,
    height: 54,
    borderRadius: 95,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  centerIcon: {
    width: 32,
    height: 32,
  },
});
