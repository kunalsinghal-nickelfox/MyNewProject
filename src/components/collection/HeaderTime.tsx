import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HeaderTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 33,
  },
  timeText: {
    color: '#F6F6F6',
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    fontWeight: '600',
  },
});
