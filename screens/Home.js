import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

import { getColorPalletesApiUrl } from '../config';
import { mapPalettes } from '../utils';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [palletes, setPalettes] = useState([]);
  const [isError, setIsError] = useState(false);

  const getPalettes = useCallback(async () => {
    const url = getColorPalletesApiUrl();
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const palettes = await response.json();
      setPalettes(mapPalettes(palettes));
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    getPalettes();
  }, [getPalettes]);

  return (
    <View style={styles.container}>
      {isError && !isLoading && (
        <View style={[styles.container]}>
          <Text style={[styles.text]}>Error occured</Text>
          <Button onPress={getPalettes} title="try again" color="#841584" />
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddNewPalette')}
      >
        <Text style={styles.buttonText}>Add new scheme</Text>
      </TouchableOpacity>
      <FlatList
        data={palletes}
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
        refreshing={isLoading}
        onRefresh={getPalettes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    height: 50,
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default Home;
