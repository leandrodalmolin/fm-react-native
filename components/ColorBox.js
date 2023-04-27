import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  // get the lightest 10% of the background colors and
  // display black text for these, and white for the rest
  const isLightColor = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1;
  const textStyle = {
    color: isLightColor ? 'black' : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textStyle]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ColorBox;
