import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

function CoinApp(): React.JSX.Element {
  return (
    <View style={styles.view1}>
      <Text>CoinApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default CoinApp;
