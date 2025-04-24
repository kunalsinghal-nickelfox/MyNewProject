import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {fonts, colors} from './CommonStyles';

export const MintErrorHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mint Error History</Text>
        <View style={styles.viewAll}>
          <Text style={styles.viewAllText}>View All</Text>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/19785619ff897560183977d00d0909456f873f4f?placeholderIfAbsent=true',
            }}
            style={styles.icon}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/3147fb5a2bf1708359255201ca26a97e2a469cef?placeholderIfAbsent=true',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/0f08d5f41e04ed7c66c4606ca28f64f91d81541e?placeholderIfAbsent=true',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/3147fb5a2bf1708359255201ca26a97e2a469cef?placeholderIfAbsent=true',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/829c99d00c22501138abc7f63a31c1ee7f918ea3?placeholderIfAbsent=true',
          }}
          style={styles.lastImage}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.sfProRounded,
    fontSize: 24,
    fontWeight: '500',
    color: colors.text.light,
    letterSpacing: -0.12,
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontFamily: fonts.sfProRounded,
    fontSize: 16,
    color: colors.text.light,
    letterSpacing: -0.08,
  },
  icon: {
    width: 20,
    height: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  image: {
    width: 106,
    aspectRatio: 0.82,
    borderRadius: 16,
    marginRight: 12,
  },
  lastImage: {
    width: 16,
    aspectRatio: 0.12,
    borderRadius: 16,
  },
});
