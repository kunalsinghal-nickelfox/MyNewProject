import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TabNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.activeTab} />
        <Text style={styles.activeTabText}>Collections</Text>
        <View style={styles.divider} />
        <Text style={styles.inactiveTabText}>Snap History</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 50,
    backgroundColor: '#4F4F4F',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 350,
    paddingVertical: 5,
  },
  tabContainer: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeTab: {
    borderRadius: 50,
    position: 'absolute',
    width: 175,
    height: 44,
    left: 0,
    backgroundColor: '#FFFFFF',
  },
  activeTabText: {
    color: '#222',
    width: 135,
    fontFamily: 'SF Pro Rounded',
    fontSize: 16,
    fontWeight: '500',
    zIndex: 1,
  },
  divider: {
    width: 1,
    height: 34,
    backgroundColor: '#B0B0B0',
  },
  inactiveTabText: {
    color: '#F6F6F6',
    width: 135,
    fontFamily: 'SF Pro Rounded',
    fontSize: 16,
    fontWeight: '500',
  },
});
