/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please enter a palette name');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette name"
      />
      <View style={styles.color}>
        <Text>Color Name</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  name: {
    marginBottom: 10,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 50,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default ColorPaletteModal;
