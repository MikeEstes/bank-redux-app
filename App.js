import React from 'react';
import { StyleSheet, View } from 'react-native';
import BankScreen from './src/screens/BankScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <BankScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
