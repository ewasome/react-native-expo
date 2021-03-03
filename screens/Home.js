import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import COLOR_PALETTES from '../data/palettes';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={(palette) => palette.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          name={item.paletteName}
          colors={item.colors.slice(0, 5)}
          onPress={() => {
            navigation.navigate('ColorPalette', {
              name: item.paletteName,
              colors: item.colors,
            });
          }}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Home;
