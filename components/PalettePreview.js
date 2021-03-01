import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const PalettePreview = ({ name, colors, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.header}>{name}</Text>
      <FlatList
        data={colors}
        style={styles.list}
        keyExtractor={(color) => color.name}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: item.hexValue }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  item: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 50,
    width: 50,
    marginRight: 10,
  },
});

export default PalettePreview;
