import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from './CommonStyles';

const CoinItem = () => (
  <View style={styles.coinItem}>
    <Image
      source={{
        uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/d15f8ab2046a66ee4521c828d97f17090176cc50?placeholderIfAbsent=true',
      }}
      style={styles.coinImage}
    />
    <View style={styles.coinInfo}>
      <Text style={styles.coinName}>
        5 Cent "Jefferson Wartime{'\n'}nickel" 1st potrait
      </Text>
      <Text style={styles.coinPrice}>$ 0.60 - $ 185</Text>
    </View>
  </View>
);

export const HighValueCoins = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>High Value Coin History</Text>
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
      <View style={styles.grid}>
        <View style={styles.column}>
          <CoinItem />
          <CoinItem />
        </View>
        <View style={styles.column}>
          <CoinItem />
          <CoinItem />
        </View>
      </View>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/863354635dec6b46587b4f14d0e51f3990d63409?placeholderIfAbsent=true',
        }}
        style={styles.banner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
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
  grid: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 26,
  },
  column: {
    flex: 1,
    gap: 20,
  },
  coinItem: {
    flexDirection: 'row',
    gap: 11,
  },
  coinImage: {
    width: 67,
    aspectRatio: 1.05,
  },
  coinInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  coinName: {
    fontFamily: fonts.sfProRounded,
    fontSize: 14,
    color: colors.text.light,
    lineHeight: 16,
  },
  coinPrice: {
    fontFamily: fonts.sfProRounded,
    fontSize: 12,
    color: colors.text.light,
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
  },
  banner: {
    width: '100%',
    aspectRatio: 2.19,
    marginTop: 50,
  },
});
