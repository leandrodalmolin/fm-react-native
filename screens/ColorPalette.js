import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
