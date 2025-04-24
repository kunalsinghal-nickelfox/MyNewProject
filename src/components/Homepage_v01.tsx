import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Header} from './Header';
import {IdentifySection} from './IdentifySection';
import {ActionButtons} from './ActionButtons';
import {MintErrorHistory} from './MintErrorHistory';
import {HighValueCoins} from './HighValueCoins';
import {ExploreContent} from './ExploreContent';
import {Footer} from './Footer';
import {commonStyles} from './CommonStyles';

const Homepage_v01 = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Header />
      <IdentifySection />
      <ActionButtons />
      <MintErrorHistory />
      <HighValueCoins />
      <ExploreContent />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    borderRadius: 24,
  },
});

export default Homepage_v01;
