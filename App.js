
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdfffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
