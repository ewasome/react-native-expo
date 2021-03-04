import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route, navigation }) => {
  const { colors } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(color) => color.name}
        renderItem={({ item }) => (
          <ColorBox
            name={item.name}
            hexValue={item.hexValue}
            onPress={() => {
              navigation.navigate('ColorDetails', {
                colorName: item.name,
                hexValue: item.hexValue,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    marginBottom: 20,
    marginHorizontal: 15,
    paddingTop: 10,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ColorPalette;
