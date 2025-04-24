import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const StatisticsSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>10</Text>
          <Text style={styles.statLabel}>Total Coins</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>$4.23</Text>
          <Text style={styles.statLabel}>Total Value (USD)</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>6</Text>
          <Text style={styles.statLabel}>Countries</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 16,
    backgroundColor: '#E6F2E9',
    marginTop: 16,
    width: '100%',
    maxWidth: 350,
    paddingVertical: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  statItem: {
    width: 100,
    alignItems: 'center',
  },
  statValue: {
    color: '#283F2F',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'SF Pro Rounded',
  },
  statLabel: {
    color: '#4F4F4F',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    fontFamily: 'SF Pro Rounded',
  },
  divider: {
    width: 1,
    height: 34,
    backgroundColor: '#B0B0B0',
  },
});
