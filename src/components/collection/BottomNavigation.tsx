import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/cf7b6dd905a9d371091f4d0cb02edb858b37be55?placeholderIfAbsent=true',
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
                uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/c3e352f13a818fc075c293604b7ea10c889706ce?placeholderIfAbsent=true',
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
                uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/79dc8ba1d95911dce1b6b8d196993d9819a5fd8b?placeholderIfAbsent=true',
              }}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Explore</Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/45e3360b49b981f36b80ce50000ac0eb134fff60?placeholderIfAbsent=true',
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
    alignSelf: 'stretch',
    marginTop: 51,
    width: '100%',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  navGroup: {
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: '#FFF',
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  navText: {
    marginTop: 8,
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'SF Pro Rounded',
  },
  centerButton: {
    borderRadius: 95,
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  centerIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
