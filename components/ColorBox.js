import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    alignItems: 'center',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ColorBox;
