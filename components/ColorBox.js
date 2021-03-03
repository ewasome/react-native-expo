import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ name, hexValue }) => {
  const lowContrast = parseInt(hexValue.replace('#', ''), 16) > 0xffffff / 1.1;
  const textColor = {
    color: lowContrast ? '#333' : '#fff',
  };

  return (
    <View style={[styles.container, { backgroundColor: hexValue }]}>
      <Text style={[styles.text, textColor]}>
        {name}: {hexValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2, // android only
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ColorBox;
