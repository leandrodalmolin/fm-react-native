import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.boxText}>Cyan</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.boxText}>Blue</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.boxText}>Magenta</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.boxText}>Orange</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    gap: 10,
  },
  box: {
    padding: 10,
    alignItems: 'center',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
