import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { default as Storybook } from './storybook';
import { ThemeProvider } from './src/ThemeProvider';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <Storybook />
      </ThemeProvider>
    </View>
  );
}
