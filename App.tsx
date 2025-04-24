import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Homepage_v01 from './src/components/Homepage_v01';
import CollectionScreen from './src/components/collection/CollectionScreen';
import Home from './src/home';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Home />
    </View>
  );
}

export default App;
