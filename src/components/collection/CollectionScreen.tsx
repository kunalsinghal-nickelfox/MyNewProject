import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderTime} from './HeaderTime';
import {CollectionHeader} from './CollectionHeader';
import {TabNavigation} from './TabNavigation';
import {StatisticsSummary} from './StatisticsSummary';
import {EmptyState} from './EmptyState';
import {BottomNavigation} from './BottomNavigation';

export const CollectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderTime />
        <CollectionHeader />
        <TabNavigation />
      </View>
      <StatisticsSummary />
      <EmptyState />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    alignSelf: 'stretch',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 31,
  },
});

export default CollectionScreen;
