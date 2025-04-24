import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const CollectionHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Coin Collection</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/1716b0811d3abe36e3f306f369badb5016fad282?placeholderIfAbsent=true',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 9,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#F4F9F6',
    textAlign: 'center',
    fontFamily: 'SF Pro Rounded',
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: -0.5,
    flex: 1,
  },
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
