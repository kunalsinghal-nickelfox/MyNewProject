import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {fonts, colors} from './CommonStyles';

const ArticleCard = ({image, title, description}) => (
  <View style={styles.articleCard}>
    <Image source={{uri: image}} style={styles.articleImage} />
    <View style={styles.articleContent}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Text style={styles.articleDescription}>{description}</Text>
    </View>
  </View>
);

export const ExploreContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Content</Text>
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
        style={styles.bannerScroll}>
        <View style={styles.banner}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/a35ce09440dadf50aa7443bdaa008d7aa0044c92?placeholderIfAbsent=true',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>
            Top 30 Low Mintage Circulation Coins
          </Text>
        </View>
        <View style={styles.banner}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/914a67cef57fb105614b3e2f5bc5e57942cd99e3?placeholderIfAbsent=true',
            }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>
            Top 30 Low Mintage Circulation Coins
          </Text>
        </View>
      </ScrollView>
      <View style={styles.articles}>
        <ArticleCard
          image="https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/41a01563712f11ddabd29af3ca1b032706e1d0ca?placeholderIfAbsent=true"
          title="Identify your old coins"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
        />
        <ArticleCard
          image="https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/6c05e7bfd25cf39d22e9b87029231369963e6d5e?placeholderIfAbsent=true"
          title="Preserving and valuing detected coins"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
        />
        <ArticleCard
          image="https://cdn.builder.io/api/v1/image/assets/b30ba9f43c9d4c0bb3782803fe63ddd1/d44fe66412a4e1ffaa4a131afdcdef6ec54a8e24?placeholderIfAbsent=true"
          title="How to roll the old coin"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
  bannerScroll: {
    marginTop: 20,
  },
  banner: {
    width: 289,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
  },
  bannerImage: {
    width: '100%',
    aspectRatio: 1.773,
  },
  bannerText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    color: colors.text.light,
    fontFamily: fonts.sfProRounded,
    fontSize: 18,
    fontWeight: '500',
  },
  articles: {
    marginTop: 24,
    gap: 20,
  },
  articleCard: {
    flexDirection: 'row',
    gap: 16,
  },
  articleImage: {
    width: 106,
    aspectRatio: 1.32,
    borderRadius: 16,
  },
  articleContent: {
    flex: 1,
    justifyContent: 'center',
  },
  articleTitle: {
    fontFamily: fonts.sfProRounded,
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.light,
    letterSpacing: -0.5,
  },
  articleDescription: {
    fontFamily: fonts.sfProRounded,
    fontSize: 12,
    color: colors.text.light,
    marginTop: 8,
    lineHeight: 18,
  },
});
