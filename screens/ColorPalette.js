import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import ColorBox from '../components/ColorBox';

const SOLARIZED_COLORS = [
  { name: 'Base03', hexValue: '#002b36' },
  { name: 'Base02', hexValue: '#073642' },
  { name: 'Base01', hexValue: '#586e75' },
  { name: 'Base00', hexValue: '#657b83' },
  { name: 'Base0', hexValue: '#839496' },
  { name: 'Base1', hexValue: '#93a1a1' },
  { name: 'Base2', hexValue: '#eee8d5' },
  { name: 'Base3', hexValue: '#fdf6e3' },
  { name: 'Yellow', hexValue: '#b58900' },
  { name: 'Orange', hexValue: '#cb4b16' },
  { name: 'Red', hexValue: '#dc322f' },
  { name: 'Magenta', hexValue: '#d33682' },
  { name: 'Violet', hexValue: '#6c71c4' },
  { name: 'Blue', hexValue: '#268bd2' },
  { name: 'Cyan', hexValue: '#2aa198' },
  { name: 'Green', hexValue: '#859900' },
];

const ColorPalette = () => (
  <View>
    <View style={styles.container}>
      <Text style={styles.text}>Solarized color scheme</Text>
    </View>
    <FlatList
      data={SOLARIZED_COLORS}
      keyExtractor={(color) => color.name}
      renderItem={({ item }) => (
        <ColorBox name={item.name} hexValue={item.hexValue} />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 15,
    paddingTop: 50,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ColorPalette;
